import {
  Action,
  ActionPanel,
  Clipboard,
  Form,
  showToast,
  Toast,
  useNavigation,
} from '@vicinae/api';
import type { NoctaliaCommand } from '../types';
import { runMsg } from '../utils/noctalia';

interface ArgumentFormProps {
  command: NoctaliaCommand;
}

export default function ArgumentForm({ command }: ArgumentFormProps) {
  const { pop } = useNavigation();

  async function handleSubmit(values: Form.Values) {
    const value = String(values.value ?? '').trim();
    if (!value) return;

    const extraArgs = command.argument?.splitArgs
      ? value.split(/\s+/).filter(Boolean)
      : [value];

    try {
      const output = await runMsg([...command.args, ...extraArgs]);
      if (command.copyResult && output) {
        await Clipboard.copy(output);
      }
      await showToast({
        style: Toast.Style.Success,
        title: command.title,
        message: output || 'Done',
      });
      pop();
    } catch (err) {
      await showToast({
        style: Toast.Style.Failure,
        title: `Failed: ${command.title}`,
        message: err instanceof Error ? err.message : String(err),
      });
    }
  }

  return (
    <Form
      navigationTitle={command.title}
      actions={
        <ActionPanel>
          <Action.SubmitForm
            title="Run"
            icon={command.icon}
            onSubmit={handleSubmit}
          />
        </ActionPanel>
      }
    >
      <Form.TextField
        id="value"
        title="Value"
        placeholder={command.argument?.placeholder}
        autoFocus
      />
      <Form.Description
        text={`noctalia msg ${command.args.join(' ')} <value>`}
      />
    </Form>
  );
}
