import { Icon } from '@vicinae/api';
import type { NoctaliaCommand } from '../types';

// Mirrors https://docs.noctalia.dev/noctalia/ipc/ — every `noctalia msg <args>`
// command whose exact argument tokens are documented. Commands with an
// undocumented or open-ended argument (e.g. monitor connectors, scheme
// names) get a free-text `argument` entry instead of guessed fixed values.

const session: NoctaliaCommand[] = [
  {
    id: 'session-lock',
    title: 'Lock Session',
    category: 'Session',
    args: ['session', 'lock'],
    icon: Icon.Lock,
  },
  {
    id: 'session-suspend',
    title: 'Suspend',
    category: 'Session',
    args: ['session', 'suspend'],
    icon: Icon.Power,
  },
  {
    id: 'session-lock-suspend',
    title: 'Lock and Suspend',
    category: 'Session',
    args: ['session', 'lock-and-suspend'],
    icon: Icon.Lock,
  },
  {
    id: 'session-logout',
    title: 'Log Out',
    category: 'Session',
    args: ['session', 'logout'],
    icon: Icon.Power,
  },
  {
    id: 'session-reboot',
    title: 'Reboot',
    category: 'Session',
    args: ['session', 'reboot'],
    icon: Icon.Power,
  },
  {
    id: 'session-shutdown',
    title: 'Shut Down',
    category: 'Session',
    args: ['session', 'shutdown'],
    icon: Icon.Power,
  },
];

const shell: NoctaliaCommand[] = [
  {
    id: 'status',
    title: 'Show Shell Status',
    category: 'Shell',
    args: ['status'],
    icon: Icon.Cog,
  },
  {
    id: 'config-reload',
    title: 'Reload Config',
    category: 'Shell',
    args: ['config-reload'],
    icon: Icon.ArrowClockwise,
  },
  {
    id: 'settings-open',
    title: 'Open Settings',
    category: 'Shell',
    args: ['settings-open'],
    icon: Icon.Cog,
  },
  {
    id: 'settings-close',
    title: 'Close Settings',
    category: 'Shell',
    args: ['settings-close'],
    icon: Icon.Cog,
  },
  {
    id: 'settings-toggle',
    title: 'Toggle Settings',
    category: 'Shell',
    args: ['settings-toggle'],
    icon: Icon.Cog,
  },
  {
    id: 'window-switcher',
    title: 'Show Window Switcher',
    category: 'Shell',
    args: ['window-switcher'],
    icon: Icon.SwitchWindows,
  },
  {
    id: 'window-switcher-close',
    title: 'Close Window Switcher',
    category: 'Shell',
    args: ['window-switcher', 'close'],
    icon: Icon.SwitchWindows,
  },
  {
    id: 'log-level-status',
    title: 'Show Log Level',
    category: 'Shell',
    args: ['log-level-status'],
    icon: Icon.Cog,
    copyResult: true,
  },
  {
    id: 'log-level-debug',
    title: 'Set Log Level: Debug',
    category: 'Shell',
    args: ['log-level-set', 'debug'],
    icon: Icon.Cog,
  },
  {
    id: 'log-level-info',
    title: 'Set Log Level: Info',
    category: 'Shell',
    args: ['log-level-set', 'info'],
    icon: Icon.Cog,
  },
  {
    id: 'log-level-warn',
    title: 'Set Log Level: Warn',
    category: 'Shell',
    args: ['log-level-set', 'warn'],
    icon: Icon.Cog,
  },
  {
    id: 'log-level-error',
    title: 'Set Log Level: Error',
    category: 'Shell',
    args: ['log-level-set', 'error'],
    icon: Icon.Cog,
  },
];

const notifications: NoctaliaCommand[] = [
  {
    id: 'dnd-on',
    title: 'Do Not Disturb: On',
    category: 'Notifications',
    args: ['notification-dnd-set', 'on'],
    icon: Icon.BellDisabled,
  },
  {
    id: 'dnd-off',
    title: 'Do Not Disturb: Off',
    category: 'Notifications',
    args: ['notification-dnd-set', 'off'],
    icon: Icon.Bell,
  },
  {
    id: 'dnd-toggle',
    title: 'Toggle Do Not Disturb',
    category: 'Notifications',
    args: ['notification-dnd-toggle'],
    icon: Icon.Bell,
  },
  {
    id: 'dnd-status',
    title: 'Show Do Not Disturb Status',
    category: 'Notifications',
    args: ['notification-dnd-status'],
    icon: Icon.Bell,
    copyResult: true,
  },
  {
    id: 'notification-show',
    title: 'Show Notification',
    category: 'Notifications',
    args: ['notification-show'],
    icon: Icon.Bell,
    argument: { placeholder: 'Notification text' },
  },
  {
    id: 'notification-invoke-latest',
    title: 'Invoke Latest Notification',
    category: 'Notifications',
    args: ['notification-invoke-latest'],
    icon: Icon.Bell,
  },
  {
    id: 'notification-clear-active',
    title: 'Clear Active Notifications',
    category: 'Notifications',
    args: ['notification-clear-active'],
    icon: Icon.BellDisabled,
  },
  {
    id: 'notification-clear-history',
    title: 'Clear Notification History',
    category: 'Notifications',
    args: ['notification-clear-history'],
    icon: Icon.BellDisabled,
  },
];

const clipboard: NoctaliaCommand[] = [
  {
    id: 'clipboard-clear',
    title: 'Clear Clipboard History',
    category: 'Clipboard',
    args: ['clipboard-clear'],
    icon: Icon.Layers,
  },
  {
    id: 'clipboard-copy',
    title: 'Copy Text to Clipboard',
    category: 'Clipboard',
    args: ['clipboard-copy'],
    icon: Icon.Layers,
    argument: { placeholder: 'Text to copy' },
  },
  {
    id: 'clipboard-text',
    title: 'Get Latest Clipboard Text',
    category: 'Clipboard',
    args: ['clipboard-text'],
    icon: Icon.Layers,
    copyResult: true,
  },
];

const media: NoctaliaCommand[] = [
  {
    id: 'media-previous',
    title: 'Previous Track',
    category: 'Media',
    args: ['media', 'previous'],
    icon: Icon.Music,
  },
  {
    id: 'media-next',
    title: 'Next Track',
    category: 'Media',
    args: ['media', 'next'],
    icon: Icon.Music,
  },
  {
    id: 'media-toggle',
    title: 'Play/Pause',
    category: 'Media',
    args: ['media', 'toggle'],
    icon: Icon.Music,
  },
  {
    id: 'media-play',
    title: 'Play',
    category: 'Media',
    args: ['media', 'play'],
    icon: Icon.PlayFilled,
  },
  {
    id: 'media-pause',
    title: 'Pause',
    category: 'Media',
    args: ['media', 'pause'],
    icon: Icon.Pause,
  },
  {
    id: 'media-stop',
    title: 'Stop',
    category: 'Media',
    args: ['media', 'stop'],
    icon: Icon.StopFilled,
  },
  {
    id: 'media-previous-player',
    title: 'Previous Player',
    category: 'Media',
    args: ['media', 'previous-player'],
    icon: Icon.Switch,
  },
  {
    id: 'media-next-player',
    title: 'Next Player',
    category: 'Media',
    args: ['media', 'next-player'],
    icon: Icon.Switch,
  },
];

const wallpaper: NoctaliaCommand[] = [
  {
    id: 'wallpaper-random',
    title: 'Random Wallpaper',
    category: 'Wallpaper',
    args: ['wallpaper-random'],
    icon: Icon.Image,
  },
  {
    id: 'wallpaper-next',
    title: 'Next Wallpaper',
    category: 'Wallpaper',
    args: ['wallpaper-next'],
    icon: Icon.Image,
  },
  {
    id: 'wallpaper-previous',
    title: 'Previous Wallpaper',
    category: 'Wallpaper',
    args: ['wallpaper-previous'],
    icon: Icon.Image,
  },
  {
    id: 'wallpaper-get',
    title: 'Get Current Wallpaper Path',
    category: 'Wallpaper',
    args: ['wallpaper-get'],
    icon: Icon.Image,
    copyResult: true,
  },
  {
    id: 'wallpaper-set',
    title: 'Set Wallpaper',
    category: 'Wallpaper',
    args: ['wallpaper-set'],
    icon: Icon.Image,
    argument: { placeholder: '/path/to/image.jpg' },
  },
];

const theme: NoctaliaCommand[] = [
  {
    id: 'theme-mode-get',
    title: 'Get Theme Mode',
    category: 'Theme',
    args: ['theme-mode-get'],
    icon: Icon.Swatch,
    copyResult: true,
  },
  {
    id: 'theme-mode-toggle',
    title: 'Toggle Theme Mode',
    category: 'Theme',
    args: ['theme-mode-toggle'],
    icon: Icon.Swatch,
  },
  {
    id: 'theme-mode-dark',
    title: 'Set Theme: Dark',
    category: 'Theme',
    args: ['theme-mode-set', 'dark'],
    icon: Icon.Moon,
  },
  {
    id: 'theme-mode-light',
    title: 'Set Theme: Light',
    category: 'Theme',
    args: ['theme-mode-set', 'light'],
    icon: Icon.Sun,
  },
  {
    id: 'color-scheme-get',
    title: 'Get Color Scheme',
    category: 'Theme',
    args: ['color-scheme-get'],
    icon: Icon.Swatch,
    copyResult: true,
  },
  {
    id: 'templates-apply',
    title: 'Reapply Theme Templates',
    category: 'Theme',
    args: ['templates-apply'],
    icon: Icon.Swatch,
  },
  {
    id: 'color-scheme-set-builtin',
    title: 'Set Color Scheme: Builtin',
    category: 'Theme',
    args: ['color-scheme-set', 'builtin'],
    icon: Icon.Swatch,
    argument: { placeholder: 'Scheme name, e.g. Noctalia', splitArgs: true },
  },
  {
    id: 'color-scheme-set-wallpaper',
    title: 'Set Color Scheme: From Wallpaper',
    category: 'Theme',
    args: ['color-scheme-set', 'wallpaper'],
    icon: Icon.Swatch,
    argument: { placeholder: 'Generator scheme name', splitArgs: true },
  },
  {
    id: 'color-scheme-set-community',
    title: 'Set Color Scheme: Community',
    category: 'Theme',
    args: ['color-scheme-set', 'community'],
    icon: Icon.Swatch,
    argument: {
      placeholder: 'Community scheme id, e.g. One Dark Two',
      splitArgs: true,
    },
  },
  {
    id: 'color-scheme-set-custom',
    title: 'Set Color Scheme: Custom',
    category: 'Theme',
    args: ['color-scheme-set', 'custom'],
    icon: Icon.Swatch,
    argument: { placeholder: 'Custom scheme folder name', splitArgs: true },
  },
  {
    id: 'greeter-sync',
    title: 'Sync Greeter (Wallpaper, Colors, Layout)',
    category: 'Theme',
    args: ['greeter-sync'],
    icon: Icon.Swatch,
  },
];

const screenshots: NoctaliaCommand[] = [
  {
    id: 'screenshot-region',
    title: 'Screenshot: Region',
    category: 'Screenshots',
    args: ['screenshot-region'],
    icon: Icon.Camera,
  },
  {
    id: 'screenshot-fullscreen',
    title: 'Screenshot: Current Display',
    category: 'Screenshots',
    args: ['screenshot-fullscreen'],
    icon: Icon.Camera,
  },
  {
    id: 'screenshot-fullscreen-pick',
    title: 'Screenshot: Pick Display',
    category: 'Screenshots',
    args: ['screenshot-fullscreen', 'pick'],
    icon: Icon.Camera,
  },
  {
    id: 'screenshot-fullscreen-all',
    title: 'Screenshot: All Displays',
    category: 'Screenshots',
    args: ['screenshot-fullscreen', 'all'],
    icon: Icon.Camera,
  },
  {
    id: 'screenshot-annotate',
    title: 'Screenshot and Annotate',
    category: 'Screenshots',
    args: ['screenshot-annotate'],
    icon: Icon.Camera,
  },
  {
    id: 'annotate',
    title: 'Live Annotate Overlay',
    category: 'Screenshots',
    args: ['annotate'],
    icon: Icon.Camera,
  },
];

const volume: NoctaliaCommand[] = [
  {
    id: 'volume-up',
    title: 'Volume Up',
    category: 'Volume',
    args: ['volume-up'],
    icon: Icon.Gauge,
  },
  {
    id: 'volume-down',
    title: 'Volume Down',
    category: 'Volume',
    args: ['volume-down'],
    icon: Icon.Gauge,
  },
  {
    id: 'volume-mute',
    title: 'Toggle Mute',
    category: 'Volume',
    args: ['volume-mute'],
    icon: Icon.Gauge,
  },
  {
    id: 'volume-osd',
    title: 'Show Volume OSD',
    category: 'Volume',
    args: ['volume-osd'],
    icon: Icon.Gauge,
  },
  {
    id: 'volume-set',
    title: 'Set Volume',
    category: 'Volume',
    args: ['volume-set'],
    icon: Icon.Gauge,
    argument: { placeholder: '0-100' },
  },
];

const microphone: NoctaliaCommand[] = [
  {
    id: 'mic-volume-up',
    title: 'Microphone Up',
    category: 'Microphone',
    args: ['mic-volume-up'],
    icon: Icon.Microphone,
  },
  {
    id: 'mic-volume-down',
    title: 'Microphone Down',
    category: 'Microphone',
    args: ['mic-volume-down'],
    icon: Icon.Microphone,
  },
  {
    id: 'mic-mute',
    title: 'Toggle Microphone Mute',
    category: 'Microphone',
    args: ['mic-mute'],
    icon: Icon.MicrophoneDisabled,
  },
  {
    id: 'mic-volume-osd',
    title: 'Show Microphone OSD',
    category: 'Microphone',
    args: ['mic-volume-osd'],
    icon: Icon.Microphone,
  },
  {
    id: 'mic-volume-set',
    title: 'Set Microphone Level',
    category: 'Microphone',
    args: ['mic-volume-set'],
    icon: Icon.Microphone,
    argument: { placeholder: '0-1 or 50%' },
  },
];

const brightness: NoctaliaCommand[] = [
  {
    id: 'brightness-up',
    title: 'Brightness Up',
    category: 'Brightness',
    args: ['brightness-up'],
    icon: Icon.Sun,
  },
  {
    id: 'brightness-down',
    title: 'Brightness Down',
    category: 'Brightness',
    args: ['brightness-down'],
    icon: Icon.Sun,
  },
  {
    id: 'brightness-osd',
    title: 'Show Brightness OSD',
    category: 'Brightness',
    args: ['brightness-osd'],
    icon: Icon.Sun,
  },
  {
    id: 'brightness-set',
    title: 'Set Brightness',
    category: 'Brightness',
    args: ['brightness-set'],
    icon: Icon.Sun,
    argument: { placeholder: '0-100' },
  },
  {
    id: 'brightness-list-backlight-devices',
    title: 'List Backlight Devices',
    category: 'Brightness',
    args: ['brightness-list-backlight-devices'],
    icon: Icon.Sun,
    copyResult: true,
  },
];

const keyboardBacklight: NoctaliaCommand[] = [
  {
    id: 'keyboard-backlight-up',
    title: 'Keyboard Backlight Up',
    category: 'Keyboard Backlight',
    args: ['keyboard-backlight-up'],
    icon: Icon.Sun,
  },
  {
    id: 'keyboard-backlight-down',
    title: 'Keyboard Backlight Down',
    category: 'Keyboard Backlight',
    args: ['keyboard-backlight-down'],
    icon: Icon.Sun,
  },
  {
    id: 'keyboard-backlight-toggle',
    title: 'Keyboard Backlight: Toggle',
    category: 'Keyboard Backlight',
    args: ['keyboard-backlight-toggle'],
    icon: Icon.Sun,
  },
  {
    id: 'keyboard-backlight-osd',
    title: 'Show Keyboard Backlight OSD',
    category: 'Keyboard Backlight',
    args: ['keyboard-backlight-osd'],
    icon: Icon.Sun,
    argument: { placeholder: '0-100' },
  },
  {
    id: 'keyboard-backlight-set',
    title: 'Set Keyboard Backlight',
    category: 'Keyboard Backlight',
    args: ['keyboard-backlight-set'],
    icon: Icon.Sun,
    argument: { placeholder: '0-100' },
  },
];

const network: NoctaliaCommand[] = [
  {
    id: 'network-toggle',
    title: 'Toggle Active Network',
    category: 'Network',
    args: ['network-toggle'],
    icon: Icon.Wifi,
  },
];

const effects: NoctaliaCommand[] = [
  {
    id: 'effects-profile-set',
    title: 'Set EasyEffects Profile',
    category: 'Effects',
    args: ['effects-profile-set'],
    icon: Icon.Music,
    argument: { placeholder: '<output|input> <profile name>', splitArgs: true },
  },
];

const workspaces: NoctaliaCommand[] = [
  {
    id: 'taskbar-cycle',
    title: 'Cycle Taskbar',
    category: 'Workspaces',
    args: ['taskbar-cycle'],
    icon: Icon.AppWindowList,
    argument: { placeholder: 'next / prev' },
  },
  {
    id: 'workspace-switch',
    title: 'Switch Workspace',
    category: 'Workspaces',
    args: ['workspace-switch'],
    icon: Icon.AppWindowGrid3x3,
    argument: { placeholder: 'next / prev / left / right' },
  },
  {
    id: 'workspace-alert-add',
    title: 'Add Workspace Alert',
    category: 'Workspaces',
    args: ['workspace-alert-add'],
    icon: Icon.Bell,
    argument: { placeholder: 'Workspace number, name, or id' },
  },
  {
    id: 'workspace-alert-add-window',
    title: 'Add Workspace Alert for Window',
    category: 'Workspaces',
    args: ['workspace-alert-add-window'],
    icon: Icon.Bell,
    argument: { placeholder: 'Window id' },
  },
  {
    id: 'workspace-alert-clear',
    title: 'Clear Workspace Alert',
    category: 'Workspaces',
    args: ['workspace-alert-clear'],
    icon: Icon.BellDisabled,
    argument: { placeholder: 'Workspace number, name, or id' },
  },
  {
    id: 'workspace-alert-clear-all',
    title: 'Clear All Workspace Alerts',
    category: 'Workspaces',
    args: ['workspace-alert-clear-all'],
    icon: Icon.BellDisabled,
  },
  {
    id: 'workspace-alert-status',
    title: 'Show Workspace Alerts',
    category: 'Workspaces',
    args: ['workspace-alert-status'],
    icon: Icon.Bell,
    copyResult: true,
  },
];

const nightLight: NoctaliaCommand[] = [
  {
    id: 'nightlight-enable',
    title: 'Night Light: Enable',
    category: 'Night Light',
    args: ['nightlight-enable'],
    icon: Icon.Moon,
  },
  {
    id: 'nightlight-disable',
    title: 'Night Light: Disable',
    category: 'Night Light',
    args: ['nightlight-disable'],
    icon: Icon.Sun,
  },
  {
    id: 'nightlight-toggle',
    title: 'Night Light: Toggle',
    category: 'Night Light',
    args: ['nightlight-toggle'],
    icon: Icon.Moon,
  },
  {
    id: 'nightlight-force-toggle',
    title: 'Night Light: Force Toggle',
    category: 'Night Light',
    args: ['nightlight-force-toggle'],
    icon: Icon.Moon,
  },
];

const wifi: NoctaliaCommand[] = [
  {
    id: 'wifi-enable',
    title: 'Wi-Fi: Enable',
    category: 'Wi-Fi',
    args: ['wifi-enable'],
    icon: Icon.Wifi,
  },
  {
    id: 'wifi-disable',
    title: 'Wi-Fi: Disable',
    category: 'Wi-Fi',
    args: ['wifi-disable'],
    icon: Icon.WifiDisabled,
  },
  {
    id: 'wifi-toggle',
    title: 'Wi-Fi: Toggle',
    category: 'Wi-Fi',
    args: ['wifi-toggle'],
    icon: Icon.Wifi,
  },
  {
    id: 'wifi-status',
    title: 'Wi-Fi: Show Status',
    category: 'Wi-Fi',
    args: ['wifi-status'],
    icon: Icon.Wifi,
    copyResult: true,
  },
];

const bluetooth: NoctaliaCommand[] = [
  {
    id: 'bluetooth-enable',
    title: 'Bluetooth: Enable',
    category: 'Bluetooth',
    args: ['bluetooth-enable'],
    icon: Icon.Bluetooth,
  },
  {
    id: 'bluetooth-disable',
    title: 'Bluetooth: Disable',
    category: 'Bluetooth',
    args: ['bluetooth-disable'],
    icon: Icon.Bluetooth,
  },
  {
    id: 'bluetooth-toggle',
    title: 'Bluetooth: Toggle',
    category: 'Bluetooth',
    args: ['bluetooth-toggle'],
    icon: Icon.Bluetooth,
  },
  {
    id: 'bluetooth-status',
    title: 'Bluetooth: Show Status',
    category: 'Bluetooth',
    args: ['bluetooth-status'],
    icon: Icon.Bluetooth,
    copyResult: true,
  },
];

const caffeine: NoctaliaCommand[] = [
  {
    id: 'caffeine-enable',
    title: 'Caffeine: Enable (Prevent Idle)',
    category: 'Caffeine',
    args: ['caffeine-enable'],
    icon: Icon.Mug,
  },
  {
    id: 'caffeine-disable',
    title: 'Caffeine: Disable',
    category: 'Caffeine',
    args: ['caffeine-disable'],
    icon: Icon.MugSteam,
  },
  {
    id: 'caffeine-toggle',
    title: 'Caffeine: Toggle',
    category: 'Caffeine',
    args: ['caffeine-toggle'],
    icon: Icon.Mug,
  },
];

const powerProfile: NoctaliaCommand[] = [
  {
    id: 'power-set-performance',
    title: 'Power Profile: Performance',
    category: 'Power Profile',
    args: ['power-set', 'performance'],
    icon: Icon.BatteryCharging,
  },
  {
    id: 'power-set-balanced',
    title: 'Power Profile: Balanced',
    category: 'Power Profile',
    args: ['power-set', 'balanced'],
    icon: Icon.BatteryCharging,
  },
  {
    id: 'power-set-power-saver',
    title: 'Power Profile: Power Saver',
    category: 'Power Profile',
    args: ['power-set', 'power-saver'],
    icon: Icon.BatteryCharging,
  },
  {
    id: 'power-set-custom',
    title: 'Power Profile: Custom',
    category: 'Power Profile',
    args: ['power-set'],
    icon: Icon.BatteryCharging,
    argument: { placeholder: 'Profile name' },
  },
  {
    id: 'power-cycle',
    title: 'Power Profile: Cycle Next',
    category: 'Power Profile',
    args: ['power-cycle'],
    icon: Icon.BatteryCharging,
  },
];

const displays: NoctaliaCommand[] = [
  {
    id: 'dpms-on',
    title: 'Turn Displays On',
    category: 'Displays',
    args: ['dpms-on'],
    icon: Icon.Monitor,
  },
  {
    id: 'dpms-off',
    title: 'Turn Displays Off',
    category: 'Displays',
    args: ['dpms-off'],
    icon: Icon.Monitor,
  },
];

const bar: NoctaliaCommand[] = [
  {
    id: 'bar-show',
    title: 'Show Bar',
    category: 'Bar',
    args: ['bar-show'],
    icon: Icon.AppWindowSidebarLeft,
  },
  {
    id: 'bar-hide',
    title: 'Hide Bar',
    category: 'Bar',
    args: ['bar-hide'],
    icon: Icon.AppWindowSidebarLeft,
  },
  {
    id: 'bar-toggle',
    title: 'Toggle Bar',
    category: 'Bar',
    args: ['bar-toggle'],
    icon: Icon.AppWindowSidebarLeft,
  },
  {
    id: 'bar-reserve-toggle',
    title: 'Toggle Bar Reserved Space',
    category: 'Bar',
    args: ['bar-reserve-toggle'],
    icon: Icon.AppWindowSidebarLeft,
  },
  {
    id: 'bar-auto-hide-set',
    title: 'Set Bar Auto-Hide',
    category: 'Bar',
    args: ['bar-auto-hide-set'],
    icon: Icon.AppWindowSidebarLeft,
    argument: { placeholder: 'enable / disable / smart' },
  },
  {
    id: 'bar-layer-top',
    title: 'Bar Layer: Top',
    category: 'Bar',
    args: ['bar-layer-set', 'top'],
    icon: Icon.AppWindowSidebarLeft,
  },
  {
    id: 'bar-layer-overlay',
    title: 'Bar Layer: Overlay',
    category: 'Bar',
    args: ['bar-layer-set', 'overlay'],
    icon: Icon.AppWindowSidebarLeft,
  },
];

const panels: NoctaliaCommand[] = [
  {
    id: 'panel-open',
    title: 'Open Panel',
    category: 'Panels',
    args: ['panel-open'],
    icon: Icon.AppWindow,
    argument: {
      placeholder:
        'launcher / session / clipboard / wallpaper / control-center',
    },
  },
  {
    id: 'panel-close',
    title: 'Close Active Panel',
    category: 'Panels',
    args: ['panel-close'],
    icon: Icon.AppWindow,
  },
  {
    id: 'panel-toggle-launcher',
    title: 'Toggle App Launcher',
    category: 'Panels',
    args: ['panel-toggle', 'launcher'],
    icon: Icon.AppWindow,
  },
  {
    id: 'panel-toggle-session',
    title: 'Toggle Session Menu',
    category: 'Panels',
    args: ['panel-toggle', 'session'],
    icon: Icon.Power,
  },
  {
    id: 'panel-toggle-clipboard',
    title: 'Toggle Clipboard History',
    category: 'Panels',
    args: ['panel-toggle', 'clipboard'],
    icon: Icon.Layers,
  },
  {
    id: 'panel-toggle-wallpaper',
    title: 'Toggle Wallpaper Picker',
    category: 'Panels',
    args: ['panel-toggle', 'wallpaper'],
    icon: Icon.Image,
  },
  {
    id: 'panel-toggle-control-center',
    title: 'Toggle Control Center',
    category: 'Panels',
    args: ['panel-toggle', 'control-center'],
    icon: Icon.AppWindow,
  },
];

const dock: NoctaliaCommand[] = [
  {
    id: 'dock-show',
    title: 'Show Dock',
    category: 'Dock',
    args: ['dock-show'],
    icon: Icon.AppWindowGrid2x2,
  },
  {
    id: 'dock-hide',
    title: 'Hide Dock',
    category: 'Dock',
    args: ['dock-hide'],
    icon: Icon.AppWindowGrid2x2,
  },
  {
    id: 'dock-toggle',
    title: 'Toggle Dock',
    category: 'Dock',
    args: ['dock-toggle'],
    icon: Icon.AppWindowGrid2x2,
  },
  {
    id: 'dock-reload',
    title: 'Reload Dock',
    category: 'Dock',
    args: ['dock-reload'],
    icon: Icon.ArrowClockwise,
  },
];

const desktopWidgets: NoctaliaCommand[] = [
  {
    id: 'desktop-widgets-edit',
    title: 'Edit Desktop Widgets',
    category: 'Desktop Widgets',
    args: ['desktop-widgets-edit'],
    icon: Icon.Desktop,
  },
  {
    id: 'desktop-widgets-exit',
    title: 'Exit Widget Edit Mode',
    category: 'Desktop Widgets',
    args: ['desktop-widgets-exit'],
    icon: Icon.Desktop,
  },
  {
    id: 'desktop-widgets-toggle-edit',
    title: 'Toggle Widget Edit Mode',
    category: 'Desktop Widgets',
    args: ['desktop-widgets-toggle-edit'],
    icon: Icon.Desktop,
  },
  {
    id: 'desktop-widgets-show',
    title: 'Show Desktop Widgets',
    category: 'Desktop Widgets',
    args: ['desktop-widgets-show'],
    icon: Icon.Desktop,
  },
  {
    id: 'desktop-widgets-hide',
    title: 'Hide Desktop Widgets',
    category: 'Desktop Widgets',
    args: ['desktop-widgets-hide'],
    icon: Icon.Desktop,
  },
  {
    id: 'desktop-widgets-toggle',
    title: 'Toggle Desktop Widgets',
    category: 'Desktop Widgets',
    args: ['desktop-widgets-toggle'],
    icon: Icon.Desktop,
  },
];

const lockscreenWidgets: NoctaliaCommand[] = [
  {
    id: 'lockscreen-widgets-edit',
    title: 'Edit Lockscreen Widgets',
    category: 'Lockscreen Widgets',
    args: ['lockscreen-widgets-edit'],
    icon: Icon.Lock,
  },
  {
    id: 'lockscreen-widgets-exit',
    title: 'Exit Lockscreen Widget Edit Mode',
    category: 'Lockscreen Widgets',
    args: ['lockscreen-widgets-exit'],
    icon: Icon.Lock,
  },
  {
    id: 'lockscreen-widgets-toggle-edit',
    title: 'Toggle Lockscreen Widget Edit Mode',
    category: 'Lockscreen Widgets',
    args: ['lockscreen-widgets-toggle-edit'],
    icon: Icon.Lock,
  },
];

export const COMMANDS: NoctaliaCommand[] = [
  ...session,
  ...shell,
  ...notifications,
  ...clipboard,
  ...media,
  ...wallpaper,
  ...theme,
  ...screenshots,
  ...volume,
  ...microphone,
  ...brightness,
  ...keyboardBacklight,
  ...nightLight,
  ...wifi,
  ...bluetooth,
  ...network,
  ...caffeine,
  ...powerProfile,
  ...displays,
  ...effects,
  ...bar,
  ...panels,
  ...dock,
  ...desktopWidgets,
  ...lockscreenWidgets,
  ...workspaces,
];
