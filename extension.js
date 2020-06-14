// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const colors = require('./colors');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	if (!vscode.workspace.workspaceFolders) {
		return;
	}

	colors.map(x => {
		vscode.commands.registerCommand(`colorify.` + x.name, function () {
			let config = vscode.workspace.getConfiguration();
			let settings = colors.find(obj => obj.name === x.name);
			config.update("workbench.colorCustomizations", settings.things, vscode.ConfigurationTarget.Workspace);
		});
	});

	vscode.commands.registerCommand(`colorify.reset`, function () {
		let config = vscode.workspace.getConfiguration();
		config.update("workbench.colorCustomizations", {}, vscode.ConfigurationTarget.Workspace);
	});
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
