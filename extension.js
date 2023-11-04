const vscode = require('vscode');
const fs = require('fs-extra');


const disposable = vscode.commands.registerCommand('extension.buildProject', () => {
    const projectPath = vscode.workspace.workspaceFolders;
    
    const noitaModsPath = vscode.workspace.getConfiguration().get('noitamodloader.modsPath');

    const excludedItems = vscode.workspace.getConfiguration().get('noitamodloader.excludedItems');

    try {
        fs.copy(projectPath, noitaModsPath, {
            filter: (src, _) => {
                const relativePath = vscode.workspace.asRelativePath(src);
                return !excludedItems.includes(relativePath);
            }
        });
        vscode.window.showInformationMessage('Проект успешно скопирован в noita/mods.');
    } catch (error) {
        vscode.window.showErrorMessage('Произошла ошибка при копировании проекта: ' + error.message);
    }
});

context.subscriptions.push(disposable);
