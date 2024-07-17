import { MouseEventHandler } from './dom';
import { ChildModified, Modified, PreserveState, State, Value, createState, isState } from 'Terraconnect-State';
export { MouseEventHandler };

export type stateify<T> = { [K in keyof T]: State<T[K]> | T[K] };
// export type children = State<HTMLComponent<unknown> | Array<HTMLComponent<unknown> | undefined | string> | State<HTMLComponent<unknown> | undefined | string | Array<Element | undefined | string>> | undefined | string> | stateify<HTMLComponent<unknown> | Array<HTMLComponent<unknown> | undefined | string>> | undefined | string;
export type children = State<HTMLComponent<any> | Array<HTMLComponent<any> | undefined | string> | undefined | string> | HTMLComponent<any> | Array<HTMLComponent<any> | undefined | string> | undefined | string;
export type props<T> = stateify<T> & { children?: children };

export type Component<T = {}, S = T & { [data: `data-${string}`]: any }> = (this: HTMLComponent<T>, props: State<S | { children: Array<HTMLComponent<unknown>> }> | S | { children: Array<HTMLComponent<unknown>> }) => children;
export type ComponentFN<T = {}> = (this: HTMLComponent<T>, props: State<T & { children?: Array<HTMLComponent<unknown>> }>) => children;
export type HTMLComponent<T> = HTMLElement & { component: string | Component<any>, props: State<HTMLComponentProps<T>>, cchildren: State<(Text | HTMLComponent<T> | null)[]> };
export type HTMLComponentProps<T> = T & { children: Array<HTMLComponent<unknown>> };

const SVGElements = ["svg", "animate", "animateMotion", "animateTransform", "circle", "clipPath", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "switch", "symbol", "text", "textPath", "tspan", "use", "view"];
const HTMLElements = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noindex", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "slot", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "template", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "webview"];

(window as any).objects = [];

const camelToSnakeCase = (s: string) => s.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);

export function createComponentElement<T>(component: string | Component<any>, props: props<T>): HTMLComponent<T> {
  let tagName = "app" + camelToSnakeCase((component as any).name);
  tagName = tagName != "app-app" ? tagName : "app-root"
  let element = document.createElement(tagName) as HTMLComponent<T>;
  element.component = component;
  // element.cchildren = createState([] as Array<any>);
  applyPropsAsAtributes(element, props);
  return element;
}

export function formatComponentProps<T>(props: props<T>): props<T> {
  props.children = formatChildren(props.children) as children;
  return props;
}

export function callComponent<T>(element: HTMLComponent<T>) {
  if (typeof element.component == "string") return;
  return element.component.bind(element)(element.props as Parameters<Component>[0])
}

export function createElement<T>(type: string, props: any) {
  const applyProps = (element: HTMLElement | SVGElement) => {
    Object.keys(props).filter(key => props[key] != null).forEach(key => {
      if (props[key][Value] == null) {
        if (key == "style")
          Object.keys(props.style).forEach((key: string) => {
            if (props.style[key][Value] == null)
              (element.style as { [key: string]: any })[key] = props.style[key];
            else {
              (element.style as { [key: string]: any })[key] = props.style[key][Value];
              props.style[key][Modified].on(() => (element.style as { [key: string]: any })[key] = props.style[key][Value]);
            }
          });
        else if (key == "value" && element instanceof HTMLInputElement)
          element.value = props[key];
        else if (key == "className")
          element.setAttribute('class', props[key]);
        else if (key.startsWith('on'))
          element.addEventListener(key.substring(2).toLowerCase(), props[key]);
        else
          element.setAttribute(key, props[key]);
      } else {
        if (key == "style")
          Object.keys(props.style).forEach((key: string) => {
            if (props.style[key][Value] == null)
              (element.style as { [key: string]: any })[key] = props.style[key];
            else {
              (element.style as { [key: string]: any })[key] = props.style[key][Value];
              props.style[key][Modified].on(() => (element.style as { [key: string]: any })[key] = props.style[key][Value]);
            }
          });
        else if (key == "value" && element instanceof HTMLInputElement)
          element.value = props[key][Value];
        else if (key == "className")
          element.setAttribute('class', props[key][Value]);
        else if (key.startsWith('on'))
          element.addEventListener(key.substring(2).toLowerCase(), props[key][Value]);
        else
          element.setAttribute(key, props[key][Value]);
        props[key][Modified].on(() => {
          if (key == "style")
            Object.keys(props.style[Value]).forEach((key: string) => (element.style as { [key: string]: any })[key] = props.style[key][Value]);
          else if (key == "value" && element instanceof HTMLInputElement)
            element.value = props[key][Value];
          else if (key == "className")
            element.setAttribute('class', props[key][Value]);
          else if (key.startsWith('on'))
            element.addEventListener(key.substring(2).toLowerCase(), props[key][Value]);
          else
            element.setAttribute(key, props[key][Value]);
        });
      }
    });
  };

  if (SVGElements.includes(type)) {
    let element = document.createElementNS("http://www.w3.org/2000/svg", type);
    applyProps(element);
    return element as Element as HTMLComponent<T>;
  } else if (HTMLElements.includes(type)) {
    let element = document.createElementNS("http://www.w3.org/1999/xhtml", type);
    applyProps(element);
    return element as HTMLComponent<T>;
  }
  throw new Error("Intrinsic Element not found!");
}

export function applyPropsAsAtributes<T>(element: HTMLComponent<T>, props: props<T>) {
  let { children, ...rest } = props;
  let attributes = createState(rest) as unknown as State<{ [key: string | symbol | number]: unknown }>;
  const setAttribute = (key: string | null, value: unknown) => {
    if (key == null)
      return;
    if (value == null) {
      if (element?.hasAttribute(key))
        element.removeAttribute(key);
      return;
    }
    let data = "";
    switch (typeof value) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
        data = value.toString();
        break;
      case "object":
        let i = ((window as any).objects as Array<any>).findIndex(_ => _ == value);
        if (i == -1) i = ((window as any).objects as Array<any>).push(value) - 1;
        data = `[${Array.isArray(value) ? "Array" : "Object"} ${i}]`// JSON.stringify(value);
        break;
      case "symbol":
        data = `[Symbol ${value.description}]`;
        break;
      case "function":
        data = `[Function ${value.name}]`;
        break;
    }
    if (key.startsWith('on'))
      key = `on-${key.substring(2)}`
    element?.setAttribute(key, data);
  }
  Object.entries<State<unknown>>(attributes).forEach(([key, state]) => setAttribute(key, state[Value]));
  attributes[ChildModified].on((newValue, key) => setAttribute((typeof key == "string" && !key.includes('.')) ? key : null, newValue));
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === "attributes" && mutation.attributeName) {
        let prop = (attributes as State<{ [key: string]: unknown }>)[mutation.attributeName];
        if (prop == null || prop[Value] == null)
          return;
        let value = element?.getAttribute(mutation.attributeName);
        if (!element?.hasAttribute(mutation.attributeName) || value == null) {
          prop[Value] = null;
          return;
        }
        if (value === 'true' || value === 'false')
          prop[Value] = value === 'true';
        else if (value !== "" && !Number.isNaN(Number(value)))
          prop[Value] = Number(value);
        else if (value.startsWith("[Symbol") || value.startsWith("[Function") || value.startsWith("[Object") || value.startsWith("[Array"))
          return;
        // else if ((value.startsWith("[") && value.endsWith("]")) || (value.startsWith("{") && value.endsWith("}")))
        //   prop[Value] = JSON.parse(value);
        else
          prop[Value] = value;
      }
    });
  });
  observer.observe(element, { attributes: true });
  element.props = createState<HTMLComponentProps<T>>({ ...(attributes as any), children: props.children });
  element.props[PreserveState] = true;
}

export function parseTextNode<T>(children: State<Array<HTMLComponent<T> | string | null>>) {
  return children.map[Value](({ [Value]: child }) =>
    child == null ? null :
      child instanceof Node ? child :
        document.createTextNode(child.toString())
  ) as State<Array<HTMLComponent<T> | Text | null>>;
}

export function appendChildren<T>(element: HTMLComponent<T>, children: State<Array<HTMLComponent<T> | Text | null>>): HTMLComponent<T> {
  children.forEach[Value](({ [Value]: child }) => {
    if (child == null) return;
    element.append(child);
    child.dispatchEvent(new Event('mount', { bubbles: true }));
  });
  // children.forEach[Value](child => {
  //   child[Modified].on((newValue, oldValue) => {
  //     if (oldValue != null) {
  //       oldValue.remove();
  //       oldValue.dispatchEvent(new Event('unmount'));
  //     }
  //     if (newValue != null) {
  //       element.append(newValue);
  //       newValue.dispatchEvent(new Event('mount'));
  //     }
  //   });
  // });
  children[ChildModified].on((newValue, key, oldValue) => {
    if (typeof key == "string" && key.includes('.')) return;
    if (oldValue != null) {
      oldValue.remove();
      oldValue.dispatchEvent(new Event('unmount', { bubbles: true }));
    }
    if (newValue != null) {
      if ((newValue as any)[Value] != null)
        debugger;
      element.append(newValue);
      newValue.dispatchEvent(new Event('mount', { bubbles: true }));
    }
  });
  // if (element.cchildren == null)
  //   element.cchildren = createState([] as Array<any>);
  // element.cchildren[Value] = [children] as any;
  return element;
}

export function formatChildren<T>(children: children): State<Array<HTMLComponent<T> | string | null>> {
  if (children != null) {
    if (isState(children)) {
      if (children[Value] == null)
        children[Value] = [] as any;
      else if (!Array.isArray(children[Value]))
        children = createState([children]) as any;
    } else if (!Array.isArray(children))
      children = createState([children]) as any;
    else
      children = createState(children);
  } else
    children = createState([]) as any;
  return children as State<Array<HTMLComponent<T> | string | null>>;
}

// export function formatChildren<T>(children: children): State<Array<HTMLComponent<T> | string | null>> {
//   if (children != null) {
//     if (isState(children)) {
//       if (children[Value] == null)
//         children[Value] = [] as unknown as undefined;
//       else if (!Array.isArray(children[Value]))
//         children = createState<children>([children] as children) as children;
//     } else if (!Array.isArray(children))
//       children = createState<children>([children] as children) as children;
//     else
//       children = createState<children>(children) as children;
//   } else
//     children = createState<children>([]) as children;
//   return children as State<Array<HTMLComponent<T> | string | null>>;
// }