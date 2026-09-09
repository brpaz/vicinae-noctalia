import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

export async function runMsg(args: string[]): Promise<string> {
  try {
    const { stdout } = await execFileAsync('noctalia', ['msg', ...args]);
    return stdout.trim();
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    if (err.code === 'ENOENT') {
      throw new Error('noctalia not found. Is Noctalia Shell installed?');
    }
    throw new Error(`noctalia msg ${args.join(' ')} failed: ${err.message}`);
  }
}

export interface ShellStatus {
  barVisible: boolean;
  panelOpen: boolean;
  activePanelId: string | null;
  locked: boolean;
}

export async function getShellStatus(): Promise<ShellStatus> {
  return JSON.parse(await runMsg(['status']));
}

export async function getWifiStatus(): Promise<string> {
  return runMsg(['wifi-status']);
}

export async function getBluetoothStatus(): Promise<string> {
  return runMsg(['bluetooth-status']);
}

export async function getDndStatus(): Promise<string> {
  return runMsg(['notification-dnd-status']);
}

export async function getThemeMode(): Promise<string> {
  return runMsg(['theme-mode-get']);
}
