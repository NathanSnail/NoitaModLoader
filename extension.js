const vscode = require('vscode');
const fs = require('fs-extra');
const path = require('path');


async function copyFilesToNoitaMods() {
    // Get the active file's directory
    const activeEditor = vscode.window.activeTextEditor;
    if (!activeEditor) {
      vscode.window.showErrorMessage('No active editor found.');
      return;
    }

    const noitaModsPath = vscode.workspace.getConfiguration().get('noitamodloader.modsPath');
    const excludedItems = vscode.workspace.getConfiguration().get('noitamodloader.excludedItems');
    const activeFile = activeEditor.document.fileName;
    const projectDir = path.dirname(activeFile);
  
    try {
      // Copy files from projectDir to NOITA_MODS_PATH
      const files = fs.readdirSync(projectDir);
      files.forEach((file) => {
        if (!excludedItems.includes(file)) {
          const sourcePath = path.join(projectDir, file);
          const destinationPath = path.join(noitaModsPath, file);
          fs.copyFileSync(sourcePath, destinationPath);
        }
      });
  
      vscode.window.showInformationMessage('Mod files copied successfully.');
    } catch (error) {
      vscode.window.showErrorMessage('Error copying mod files: ' + error.message);
    }
  }


function activate(context) {
    const disposable = vscode.commands.registerCommand('extension.loadMod', copyFilesToNoitaMods);
    context.subscriptions.push(disposable);
}

exports.activate = activate;

function deactivate() {}

module.exports = {
    activate,
    deactivate
  };    