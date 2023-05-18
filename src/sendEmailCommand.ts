import type grapesjs from 'grapesjs';
import { PluginOptions } from '.';

export default (editor: grapesjs.Editor, opts: Required<PluginOptions>) => {
	const { Commands } = editor;

	   //Al's Commands
    Commands.add(opts.cmdSendEmail, {
      run: (editor) => {
        window.location.href = "mailto:?subject=Me&html-body=" + editor.runCommand('gjs-get-inlined-html')
    }
    });
}