import * as NodeGUI from '@nodegui/nodegui';

export type Element = any;
export type Component<T = {}> = (props: T & {children?: Element | Array<Element>}) => Element;

export function createElement(type: Function, props?: any, ...children: Array<Element>): Element{
  children = children ?? [];
  props = props ?? {}
  return {
    type,
    props: {...props, children: [...props.children ?? [], ...children]}
  };
}

export const Fragment: Component<{}> = ({children}) => {
  return children;
}


export interface ApplicationProps {
  quitOnLastWindowClosed?: boolean;
}

export const Application: Component<ApplicationProps> = (props) => {
  if("quitOnLastWindowClosed" in props)
    NodeGUI.QApplication.instance().setQuitOnLastWindowClosed(props.quitOnLastWindowClosed ?? false);
  return props.children;
}



export interface WindowProps {
  title: string;
  size: [number, number];
  visable?: boolean
}

export const Window: Component<WindowProps> = (props) => {
  const window = new NodeGUI.QMainWindow();
  window.setWindowTitle(props.title);
  window.resize(...props.size);
  if(props.visable)
    window.show();
  return props.children;
}