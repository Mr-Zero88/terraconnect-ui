// import * as NodeGUI from '@nodegui/nodegui';

// NodeGUI.QApplication.instance().setQuitOnLastWindowClosed(false);

// const window = new NodeGUI.QMainWindow();
// window.setWindowTitle("Terraconnect-UI");
// window.resize(400, 700);
// window.show();
// const menu = new NodeGUI.QMenu();
// const hideAction = new NodeGUI.QAction();
// hideAction.setText("hide window");
// hideAction.setShortcut(new NodeGUI.QKeySequence("Alt+H"));
// hideAction.addEventListener("triggered", () => {
//   window.hide();
// });
// menu.addAction(hideAction);
// const showAction = new NodeGUI.QAction();
// showAction.setText("show window");
// showAction.setShortcut(new NodeGUI.QKeySequence("Alt+S"));
// showAction.addEventListener("triggered", () => {
//   window.show();
// });
// menu.addAction(showAction);
// const quitAction = new NodeGUI.QAction();
// quitAction.setText("Quit");
// quitAction.addEventListener("triggered", () => {
//   NodeGUI.QApplication.instance().exit(0);
// });
// menu.addAction(quitAction);
// const trayIcon = new NodeGUI.QIcon(`C:/Users/User/Pictures/Terraconnect256x256.png`);
// const tray = new NodeGUI.QSystemTrayIcon();
// tray.setIcon(trayIcon);
// tray.setToolTip("Terraconnect-UI");
// tray.show();
// tray.setContextMenu(menu);
// tray.showMessage('Start');

export { render } from './dom';
export { createElement, Component } from './jsx-runtime';