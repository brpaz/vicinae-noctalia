import { showToast, Toast } from '@vicinae/api';
import { runMsg } from './utils/noctalia';

export default async function Command() {
  try {
    await runMsg(['caffeine-toggle']);
    await showToast({ style: Toast.Style.Success, title: 'Caffeine toggled' });
  } catch (err) {
    await showToast({
      style: Toast.Style.Failure,
      title: 'Failed to toggle caffeine',
      message: err instanceof Error ? err.message : String(err),
    });
  }
}
