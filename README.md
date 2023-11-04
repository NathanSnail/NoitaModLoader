# Noita Mod Loader VSCode Extension

## Description

The "Noita Mod Loader" is a Visual Studio Code plugin that simplifies the process of copying files from your project directory to the "noita/mods" directory when you build your project. This plugin is designed to assist Noita modders by automating the file copying process, making it more convenient to develop mods for the game.

## Installation

You can install the "Noita Mod Loader" plugin in Visual Studio Code by following these steps:

1. Launch Visual Studio Code.

2. Go to the Extensions view by clicking on the square icon in the Activitys Bar on the side of the window.

3. In the search bar, type "Noita Mod Loader" and press Enter.

4. Locate the "Noita Mod Loader" plugin in the search results and click the Install button.

5. The plugin will be installed and ready for use.

## Usage

After installing the "Noita Mod Loader" plugin, you can use it to copy files from your project directory to the "noita/mods" directory by following these steps:

1. Open your Noita modding project in Visual Studio Code.

2. Build your project in Visual Studio Code.

3. The "Noita Mod Loader" plugin will automatically copy the files from your project directory to the "noita/mods" directory, excluding the files and directories specified in the plugin's settings.

4. You will receive a notification message confirming that the project has been successfully copied to "noita/mods."

## Configuration

The "Noita Mod Loader" plugin allows you to configure its behavior through the following settings:

- `noitamodloader.modsPath`: Specifies the path to the "noita/mods" directory. The default value is the path to the Noita Steam version on the C: drive.

- `noitamodloader.excludedItems`: Defines the list of files and directories that should be excluded from the copying process. 
By default, it excludes `.gitignore` and `.vscode` files or directories. You can modify this list to exclude other items as needed.

You can configure these settings in Visual Studio Code by navigating to File > Preferences > Settings and searching for "Noita Mod Loader."

## Author

- [Forgenet](https://github.com/f0rgenet)

Thank you for using the "Noita Mod Loader" plugin. Happy modding!
