import * as NodeGUI from '@nodegui/nodegui';

NodeGUI.QApplication.instance().setQuitOnLastWindowClosed(false);

const window = new NodeGUI.QMainWindow();
window.setWindowTitle("NodeGUI Demo");
window.resize(400, 700);
window.show();
const trayIcon = new NodeGUI.QIcon(`C:/Users/User/Pictures/Terraconnect256x256.png`);
const tray = new NodeGUI.QSystemTrayIcon();
tray.setIcon(trayIcon);
tray.setToolTip("hello");
tray.show();
const menu = new NodeGUI.QMenu();
tray.setContextMenu(menu);