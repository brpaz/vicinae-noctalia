import {
  Action,
  ActionPanel,
  Color,
  Icon,
  List,
  showToast,
  Toast,
} from '@vicinae/api';
import { useCallback, useEffect, useState } from 'react';
import {
  getBluetoothStatus,
  getDndStatus,
  getShellStatus,
  getThemeMode,
  getWifiStatus,
  runMsg,
  type ShellStatus,
} from './utils/noctalia';

interface ToggleState {
  wifi: string;
  bluetooth: string;
  dnd: string;
  themeMode: string;
  shell: ShellStatus;
}

export default function Command() {
  const [state, setState] = useState<ToggleState | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [wifi, bluetooth, dnd, themeMode, shell] = await Promise.all([
        getWifiStatus(),
        getBluetoothStatus(),
        getDndStatus(),
        getThemeMode(),
        getShellStatus(),
      ]);
      setState({ wifi, bluetooth, dnd, themeMode, shell });
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const toggle = useCallback(
    async (title: string, args: string[]) => {
      try {
        await runMsg(args);
        showToast({ style: Toast.Style.Success, title });
        await refresh();
      } catch (err) {
        showToast({
          style: Toast.Style.Failure,
          title: `Failed: ${title}`,
          message: err instanceof Error ? err.message : String(err),
        });
      }
    },
    [refresh]
  );

  if (error) {
    return (
      <List>
        <List.EmptyView
          icon={Icon.Warning}
          title="Could not reach Noctalia"
          description={error}
          actions={
            <ActionPanel>
              <Action
                title="Retry"
                icon={Icon.ArrowClockwise}
                onAction={refresh}
              />
            </ActionPanel>
          }
        />
      </List>
    );
  }

  function onOffTag(value: string) {
    const on = value === 'on';
    return {
      tag: {
        value: on ? 'ON' : 'OFF',
        color: on ? Color.Green : Color.SecondaryText,
      },
    };
  }

  return (
    <List isLoading={loading} navigationTitle="Noctalia Quick Toggles">
      {state && (
        <>
          <List.Item
            title="Wi-Fi"
            icon={state.wifi === 'on' ? Icon.Wifi : Icon.WifiDisabled}
            accessories={[onOffTag(state.wifi)]}
            actions={
              <ActionPanel>
                <Action
                  title="Toggle Wi-Fi"
                  icon={Icon.Wifi}
                  onAction={() => toggle('Wi-Fi toggled', ['wifi-toggle'])}
                />
                <Action
                  title="Refresh"
                  icon={Icon.ArrowClockwise}
                  onAction={refresh}
                />
              </ActionPanel>
            }
          />
          <List.Item
            title="Bluetooth"
            icon={Icon.Bluetooth}
            accessories={[onOffTag(state.bluetooth)]}
            actions={
              <ActionPanel>
                <Action
                  title="Toggle Bluetooth"
                  icon={Icon.Bluetooth}
                  onAction={() =>
                    toggle('Bluetooth toggled', ['bluetooth-toggle'])
                  }
                />
                <Action
                  title="Refresh"
                  icon={Icon.ArrowClockwise}
                  onAction={refresh}
                />
              </ActionPanel>
            }
          />
          <List.Item
            title="Do Not Disturb"
            icon={state.dnd === 'on' ? Icon.BellDisabled : Icon.Bell}
            accessories={[onOffTag(state.dnd)]}
            actions={
              <ActionPanel>
                <Action
                  title="Toggle Do Not Disturb"
                  icon={Icon.Bell}
                  onAction={() =>
                    toggle('Do Not Disturb toggled', [
                      'notification-dnd-toggle',
                    ])
                  }
                />
                <Action
                  title="Refresh"
                  icon={Icon.ArrowClockwise}
                  onAction={refresh}
                />
              </ActionPanel>
            }
          />
          <List.Item
            title="Caffeine"
            subtitle="Prevent system idle (Noctalia doesn't report its current state)"
            icon={Icon.Mug}
            actions={
              <ActionPanel>
                <Action
                  title="Toggle Caffeine"
                  icon={Icon.Mug}
                  onAction={() =>
                    toggle('Caffeine toggled', ['caffeine-toggle'])
                  }
                />
              </ActionPanel>
            }
          />
          <List.Item
            title="Theme Mode"
            icon={state.themeMode === 'dark' ? Icon.Moon : Icon.Sun}
            accessories={[
              { tag: { value: state.themeMode, color: Color.Blue } },
            ]}
            actions={
              <ActionPanel>
                <Action
                  title="Toggle Theme Mode"
                  icon={Icon.Swatch}
                  onAction={() =>
                    toggle('Theme mode toggled', ['theme-mode-toggle'])
                  }
                />
                <Action
                  title="Refresh"
                  icon={Icon.ArrowClockwise}
                  onAction={refresh}
                />
              </ActionPanel>
            }
          />
          <List.Item
            title="Bar"
            icon={Icon.AppWindowSidebarLeft}
            accessories={[
              {
                tag: {
                  value: state.shell.barVisible ? 'VISIBLE' : 'HIDDEN',
                  color: state.shell.barVisible
                    ? Color.Green
                    : Color.SecondaryText,
                },
              },
            ]}
            actions={
              <ActionPanel>
                <Action
                  title="Toggle Bar"
                  icon={Icon.AppWindowSidebarLeft}
                  onAction={() => toggle('Bar toggled', ['bar-toggle'])}
                />
                <Action
                  title="Refresh"
                  icon={Icon.ArrowClockwise}
                  onAction={refresh}
                />
              </ActionPanel>
            }
          />
          <List.Item
            title="Session Lock"
            icon={Icon.Lock}
            accessories={[
              {
                tag: {
                  value: state.shell.locked ? 'LOCKED' : 'UNLOCKED',
                  color: state.shell.locked ? Color.Orange : Color.Green,
                },
              },
            ]}
            actions={
              <ActionPanel>
                {!state.shell.locked && (
                  <Action
                    title="Lock Now"
                    icon={Icon.Lock}
                    onAction={() =>
                      toggle('Session locked', ['session', 'lock'])
                    }
                  />
                )}
                <Action
                  title="Refresh"
                  icon={Icon.ArrowClockwise}
                  onAction={refresh}
                />
              </ActionPanel>
            }
          />
        </>
      )}
    </List>
  );
}
