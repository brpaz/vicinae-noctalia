import {
  Action,
  ActionPanel,
  Clipboard,
  List,
  showToast,
  Toast,
  useNavigation,
} from '@vicinae/api';
import ArgumentForm from './components/argument-form';
import { COMMANDS } from './data/commands';
import type { NoctaliaCommand } from './types';
import { runMsg } from './utils/noctalia';

function groupByCategory(
  commands: NoctaliaCommand[]
): [string, NoctaliaCommand[]][] {
  const groups = new Map<string, NoctaliaCommand[]>();
  for (const command of commands) {
    const list = groups.get(command.category) ?? [];
    list.push(command);
    groups.set(command.category, list);
  }
  return [...groups.entries()];
}

const SECTIONS = groupByCategory(COMMANDS);

export default function Command() {
  const { push } = useNavigation();

  async function run(command: NoctaliaCommand) {
    try {
      const output = await runMsg(command.args);
      if (command.copyResult && output) {
        await Clipboard.copy(output);
      }
      await showToast({
        style: Toast.Style.Success,
        title: command.title,
        message: output || 'Done',
      });
    } catch (err) {
      await showToast({
        style: Toast.Style.Failure,
        title: `Failed: ${command.title}`,
        message: err instanceof Error ? err.message : String(err),
      });
    }
  }

  return (
    <List
      navigationTitle="Noctalia Actions"
      searchBarPlaceholder="Search actions..."
    >
      {SECTIONS.map(([category, commands]) => (
        <List.Section key={category} title={category}>
          {commands.map((command) => (
            <List.Item
              key={command.id}
              title={command.title}
              subtitle={`noctalia msg ${command.args.join(' ')}`}
              icon={command.icon}
              keywords={command.keywords}
              actions={
                <ActionPanel>
                  <Action
                    title={command.argument ? 'Enter Value…' : 'Run'}
                    icon={command.icon}
                    onAction={() =>
                      command.argument
                        ? push(<ArgumentForm command={command} />)
                        : run(command)
                    }
                  />
                  <Action.CopyToClipboard
                    title="Copy Command"
                    content={`noctalia msg ${command.args.join(' ')}`}
                  />
                </ActionPanel>
              }
            />
          ))}
        </List.Section>
      ))}
    </List>
  );
}
