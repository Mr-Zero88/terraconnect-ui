// import * as NodeGUI from '@nodegui/nodegui';
// import { Component } from './jsx-runtime';

// export interface ApplicationProps {
//   quitOnLastWindowClosed?: boolean;
// }

// export const Application: Component<ApplicationProps> = (props) => {
//   if("quitOnLastWindowClosed" in props)
//     NodeGUI.QApplication.instance().setQuitOnLastWindowClosed(props.quitOnLastWindowClosed ?? false);
//   return props.children;
// }

// export interface WindowProps {
//   title: string;
//   size: [number, number];
//   visable?: boolean
// }

// export const Window: Component<WindowProps> = (props) => {
//   const window = new NodeGUI.QMainWindow();
//   window.setWindowTitle(props.title);
//   window.resize(...props.size);
//   if(props.visable)
//     window.show();
//   return props.children;
// }