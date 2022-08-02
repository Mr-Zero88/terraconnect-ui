export type Element = any;
export type Component<T = {}> = (props: T & {children?: Element | Array<Element>}) => Element | (new  (props: T & {children?: Element | Array<Element>}) => any);

export function jsx(component: Component | any, props: Object & {children?: Component | Array<Component>}) {
  if (typeof component === 'function') {
    if (component.prototype !== undefined) {
      return new component(props)
    }
    return component(props)
  }
  const { children = [] } = {...props} = props
  const childrenProps = Array().concat(children)
  return {
    component,
    key: null,
    props: {
      ...props,
      children: childrenProps.map((child: Element): Element => {
          return typeof child == 'object' ? child : {
            type: 'jsxTextNode',
            key: null,
            props: {
              text: child,
              children: []
            }
          }
        }
      )
    }
  }
}

export function createElement(component: Component & any, props?: any, ...children: Array<Element>): Element{
  children = children ?? [];
  props = props ?? {}
  return jsx(component, {...props, children: [...props.children ?? [], ...children]});
}

export const jsxs = jsx;

export const Fragment = 'jsx.Fragment';