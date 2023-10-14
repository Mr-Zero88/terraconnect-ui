import './dom';
import { Component, HTMLComponent, children, props, formatChildren, createElement, appendChildren, applyPropsAsAtributes } from '.';

const camelToSnakeCase = (s: string) => s.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);

export function jsx<T>(component: typeof Fragment | string | Component<any>, props: props<T>): children {
  if (component == Fragment)
    return props.children;
  if (typeof component === 'function') {
    let tagName = "app" + camelToSnakeCase((component as any).name);
    tagName = tagName != "app-app" ? tagName : "app-root"
    let element = document.createElement(tagName) as HTMLComponent<T>;
    element.component = component;
    props.children = formatChildren(props.children) as children;
    applyPropsAsAtributes(element, props);
    let children = formatChildren(component.bind(element)(props as unknown as Parameters<Component>[0]));
    appendChildren(element, children);
    return element;
  } else {
    let children = formatChildren(props.children);
    delete (props.children);
    let element = createElement(component, props) as HTMLComponent<T>;
    appendChildren(element, children);
    return element;
  }
}
export const jsxs = jsx;
export const Fragment = Symbol('Fragment');
