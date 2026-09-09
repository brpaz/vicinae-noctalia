# Noctalia

> Control the Noctalia shell: system controls, panels, media, wallpaper, theme and more via its IPC interface

## 🎯 Features

- Search and run any of Noctalia's ~140 IPC commands, grouped by category
- Forms for commands that need a value (volume, brightness, wallpaper path, notification text, custom power profile, etc.)
- Quick Toggles view for live state: Wi-Fi, Bluetooth, DND, Caffeine, theme mode, bar visibility, session lock
- Dedicated hotkey-friendly toggles for Caffeine and Do Not Disturb
- Info view with the installed Noctalia version and project links

## 🚀 Getting Started

## Prerequisites

- [Node.js](https://nodejs.org/) (recommended version 24 or higher)
- [Noctalia Shell](https://noctalia.dev) v5+ installed and running, with the `noctalia` CLI on your `PATH`

### Installation

This extension is not yet published to the Vicinae Store. Install it by building from source below.

### Build From Source

1. Clone the repository:
   ```bash
   git clone https://github.com/brpaz/vicinae-noctalia.git
2. Navigate to the project directory:
   ```bash
   cd noctalia
3. Install dependencies:
   ```bash
   npm i
4. Build the project:
   ```bash
   npm run build
   ```

This will install the extension in `~/.local/share/vicinae/extensions`, and will be available immediately on your Vicinae app.

## Development

In development, you can use the following command to watch for changes and rebuild your extension automatically:

```bash
npm run dev
```

## 🧰 Usage

The extension adds five commands to Vicinae:

- **Noctalia Actions** — search and run any IPC command (system controls, panels, media, wallpaper, theme, workspaces, etc.)
- **Noctalia Quick Toggles** — see and toggle Wi-Fi, Bluetooth, DND, Caffeine, theme mode, bar visibility, and session lock
- **Toggle Caffeine** / **Toggle Do Not Disturb** — instant one-key toggles, bind them to a global hotkey
- **Noctalia Info** — installed version, website, docs and GitHub links

Commands whose argument isn't a fixed value (a port number, a wallpaper path, notification text, a custom power profile) open a small form instead of guessing.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.