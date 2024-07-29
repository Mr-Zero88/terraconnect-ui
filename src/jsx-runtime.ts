import './dom';
import { Component, children, props, formatChildren, createElement, appendChildren, parseTextNode, createComponentElement, callComponent, formatComponentProps } from '.';

export function jsx<T>(component: typeof Fragment | string | Component<any>, props: props<T>): children {
  if (component == Fragment)
    return props.children;
  if (typeof component === 'function') {
    let element = createComponentElement(component, formatComponentProps(props));
    return appendChildren(element, parseTextNode(formatChildren(callComponent(element))));
  } else {
    let { children, ...args } = props;
    return appendChildren(createElement(component, args), parseTextNode(formatChildren(children)));
  }
}
export const jsxs = jsx;
export const Fragment = Symbol('Fragment');
