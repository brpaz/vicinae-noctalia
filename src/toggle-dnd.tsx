import { showToast, Toast } from '@vicinae/api';
import { runMsg } from './utils/noctalia';

export default async function Command() {
  try {
    await runMsg(['notification-dnd-toggle']);
    await showToast({
      style: Toast.Style.Success,
      title: 'Do Not Disturb toggled',
    });
  } catch (err) {
    await showToast({
      style: Toast.Style.Failure,
      title: 'Failed to toggle Do Not Disturb',
      message: err instanceof Error ? err.message : String(err),
    });
  }
}
