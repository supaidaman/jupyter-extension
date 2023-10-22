import {
  ILabShell,
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
  JupyterLab
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';
import { ILauncher } from '@jupyterlab/launcher';

//import type { IRetroShell } from '@retrolab/application';

// ...

const extension: JupyterFrontEndPlugin<void> = {
  id: 'server-extension-example',
  autoStart: true,
  optional: [ILauncher],
  requires: [ICommandPalette],
  activate: async (
    app: JupyterFrontEnd,
    lab: JupyterLab,
    palette: ICommandPalette,
    launcher: ILauncher | null
  ) => {
    const shell = app.shell as ILabShell;
    shell.currentChanged.connect((_: any, change: any) => {
      console.log(change);
      if (
        change?.oldValue?.constructor?.name === 'NotebookPanel' &&
        change?.newValue?.constructor?.name === 'MainAreaWidget'
      ) {
        console.log('é pra fechar');
        //IPython.notebook.kernel.kill();
      }
      // ...
    });
  }
};

export default extension;
