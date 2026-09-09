import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import {
  Action,
  ActionPanel,
  Detail,
  Icon,
  showToast,
  Toast,
} from '@vicinae/api';
import { useEffect, useState } from 'react';
import { getShellStatus } from './utils/noctalia';

const execFileAsync = promisify(execFile);

const WEBSITE = 'https://noctalia.dev';

export default function Command() {
  const [version, setVersion] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [barVisible, setBarVisible] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { stdout } = await execFileAsync('noctalia', ['--version']);
        setVersion(stdout.trim());
        const status = await getShellStatus();
        setBarVisible(status.barVisible);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        setError(message);
        showToast({
          style: Toast.Style.Failure,
          title: 'Failed to read Noctalia info',
          message,
        });
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const markdown = error
    ? `# Noctalia\n\nCould not reach Noctalia: ${error}`
    : loading
      ? '# Noctalia\n\nLoading…'
      : `# Noctalia\n\n${version ?? 'Unknown version'}\n\n[${WEBSITE}](${WEBSITE})`;

  return (
    <Detail
      markdown={markdown}
      metadata={
        !error && (
          <Detail.Metadata>
            <Detail.Metadata.Label
              title="Version"
              text={version ?? 'Unknown'}
              icon={Icon.Cog}
            />
            <Detail.Metadata.Label
              title="Shell"
              text={barVisible === null ? 'Unreachable' : 'Running'}
              icon={Icon.CheckCircle}
            />
            <Detail.Metadata.Separator />
            <Detail.Metadata.Link
              title="Website"
              target={WEBSITE}
              text="noctalia.dev"
            />
            <Detail.Metadata.Link
              title="Documentation"
              target="https://docs.noctalia.dev"
              text="docs.noctalia.dev"
            />
            <Detail.Metadata.Link
              title="GitHub"
              target="https://github.com/noctalia-dev"
              text="github.com/noctalia-dev"
            />
          </Detail.Metadata>
        )
      }
      actions={
        <ActionPanel>
          <Action.OpenInBrowser title="Open Website" url={WEBSITE} />
          <Action.OpenInBrowser
            title="Open Documentation"
            url="https://docs.noctalia.dev"
          />
          <Action.CopyToClipboard
            title="Copy Version"
            content={version ?? ''}
          />
        </ActionPanel>
      }
    />
  );
}
