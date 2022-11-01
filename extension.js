
const vscode = require('vscode');
const axios = require('axios')

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
	const res = await axios.get("https://jsonplaceholder.typicode.com/photos/1")
	console.log(res.data)
	console.log('Congratulations, your extension "DT-DeepTuring vscode" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('DT-DeepTuring-Deepturingcode-vscode.DTAutocomplete', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Message from Deep Turing!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
