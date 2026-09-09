import type { Icon } from '@vicinae/api';

export interface NoctaliaCommand {
  id: string;
  title: string;
  category: string;
  args: string[];
  icon: Icon;
  keywords?: string[];
  /** When set, pushes a form to collect this value instead of running immediately. */
  argument?: {
    placeholder: string;
    /** Split the typed value on whitespace into multiple argv tokens (for multi-word positional args). Defaults to false, keeping the value as one token (paths, free text). */
    splitArgs?: boolean;
  };
  /** When set, the command's stdout is also copied to the system clipboard. */
  copyResult?: boolean;
}
