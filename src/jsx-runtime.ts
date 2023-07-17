import './dom';
import * as State from 'Terraconnect-State';


type stateify<T> = { [K in keyof T]: State.State<T[K]> | T[K] };
export type Component<T = {}> = (props: stateify<T> & { children?: State.State<Array<Element>> }) => stateify<Element | Array<Element>>;
export type ComponentFN<T = {}> = (props: stateify<T> & { children: State.State<Array<Element>> }) => stateify<Element | Array<Element>>;

const snakeToCamelCase = (s: string) => s.toLowerCase().replace(/(_\w)/g, (w) => w.toUpperCase().substring(1));
const camelToSnakeCase = (s: string) => s.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);

const SVGElements = ["svg", "animate", "animateMotion", "animateTransform", "circle", "clipPath", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "switch", "symbol", "text", "textPath", "tspan", "use", "view"];
const HTMLElements = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noindex", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "slot", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "template", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "webview"];

function createElement(type: string, props: any) {
  const applyProps = (element: HTMLElement | SVGElement) => {
    Object.keys(props).filter(key => props[key] != null).forEach(key => {
      if (props[key][State.Value] == null) {
        if (key == "style")
          Object.keys(props.style).forEach((key: string) => {
            if (props.style[key][State.Value] == null)
              (element.style as { [key: string]: any })[key] = props.style[key];
            else {
              (element.style as { [key: string]: any })[key] = props.style[key][State.Value];
              props.style[key][State.Modified].on(() => (element.style as { [key: string]: any })[key] = props.style[key][State.Value]);
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
            if (props.style[key][State.Value] == null)
              (element.style as { [key: string]: any })[key] = props.style[key];
            else {
              (element.style as { [key: string]: any })[key] = props.style[key][State.Value];
              props.style[key][State.Modified].on(() => (element.style as { [key: string]: any })[key] = props.style[key][State.Value]);
            }
          });
        else if (key == "value" && element instanceof HTMLInputElement)
          element.value = props[key][State.Value];
        else if (key == "className")
          element.setAttribute('class', props[key][State.Value]);
        else if (key.startsWith('on'))
          element.addEventListener(key.substring(2).toLowerCase(), props[key][State.Value]);
        else
          element.setAttribute(key, props[key][State.Value]);
        props[key][State.Modified].on(() => {
          if (key == "style")
            Object.keys(props.style[State.Value]).forEach((key: string) => (element.style as { [key: string]: any })[key] = props.style[key][State.Value]);
          else if (key == "value" && element instanceof HTMLInputElement)
            element.value = props[key][State.Value];
          else if (key == "className")
            element.setAttribute('class', props[key][State.Value]);
          else if (key.startsWith('on'))
            element.addEventListener(key.substring(2).toLowerCase(), props[key][State.Value]);
          else
            element.setAttribute(key, props[key][State.Value]);
        });
      }
    });
  };

  if (SVGElements.includes(type)) {
    let element = document.createElementNS("http://www.w3.org/2000/svg", type);
    applyProps(element);
    return element;
  } else if (HTMLElements.includes(type)) {
    let element = document.createElementNS("http://www.w3.org/1999/xhtml", type);
    applyProps(element);
    return element;
  }
  throw new Error("Intrinsic Element not found!");
}

function isState<T>(value: T): value is State.StateSymboles<any> & T {
  return value != null && typeof value == 'object' && State.Value in value;
}

export const Fragment = 'jsx.Fragment';
export function jsx<T>(component: string | Component<any>, props: stateify<T> & { children?: State.State<Element | Array<Element | undefined> | State.State<Element | undefined | Array<Element | undefined>> | undefined> | stateify<Element | Array<Element | undefined>> | undefined }): State.State<Element | Array<Element | undefined> | State.State<Element | undefined | Array<Element | undefined>> | undefined> | stateify<Element | Array<Element | undefined>> | undefined {
  if (component == Fragment)
    return props.children;
  let _element: Element | null = null;
  let _children: State.State<Element | Array<Element | undefined> | undefined> | stateify<Element | Array<Element | undefined>> | undefined = undefined;
  if (typeof component === 'function') {
    let tagName = "app" + camelToSnakeCase((component as any).name);
    tagName = tagName != "app-app" ? tagName : "app-root"
    _element = document.createElement(tagName);
    if (_element == null)
      throw new Error("document.createElement has returned null");
    let { children, ...rest } = props;
    let attributes = State.createState(rest) as unknown as State.State<{ [key: string | symbol | number]: unknown }>;
    const setAttribute = (key: string | null, value: unknown) => {
      if (key == null)
        return;
      if (value == null) {
        if (element.hasAttribute(key))
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
          data = JSON.stringify(value);
          break;
        case "symbol":
          data = `[Symbol ${value.description}]`;
          break;
        case "function":
          data = `[Function ${value.name}]`;
          break;
      }
      _element?.setAttribute(key.replaceAll('on', 'on-'), data);
    }
    Object.entries<State.State<unknown>>(attributes).forEach(([key, state]) => setAttribute(key, state[State.Value]));
    attributes[State.ChildModified].on((newValue, key) => setAttribute((typeof key == "string") ? key : null, newValue));
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === "attributes" && mutation.attributeName) {
          let prop = (attributes as State.State<{ [key: string]: unknown }>)[mutation.attributeName];
          if (prop == null || prop[State.Value] == null)
            return;
          let value = _element?.getAttribute(mutation.attributeName);
          if (!_element?.hasAttribute(mutation.attributeName) || value == null) {
            prop[State.Value] = null;
            return;
          }
          if (value === 'true' || value === 'false')
            prop[State.Value] = value === 'true';
          else if (value !== "" && !Number.isNaN(Number(value)))
            prop[State.Value] = Number(value);
          else if (value.startsWith("[Symbol") || value.startsWith("[Symbol"))
            return;
          else if ((value.startsWith("[") && value.endsWith("]")) || (value.startsWith("{") && value.endsWith("}")))
            prop[State.Value] = JSON.parse(value);
          else
            prop[State.Value] = value;
        }
      });
    });
    observer.observe(_element, { attributes: true });

    // if (props.children != null) {
    //   if (isState(props.children)) {
    //     if (props.children[State.Value] == null)
    //       props.children[State.Value] = [];
    //     else if (!Array.isArray(props.children[State.Value]))
    //       props.children[State.Value] = [props.children[State.Value] as Element];
    //   }
    //   else if (!Array.isArray(props.children))
    //     props.children = State.createState<Array<Element>>([props.children as Element]);
    // } else
    //   props.children = State.createState([]);

    if (props.children != null) {
      if (isState(props.children)) {
        if (props.children[State.Value] == null)
          props.children[State.Value] = [];
        else if (!Array.isArray(props.children[State.Value]))
          props.children[State.Value] = [props.children as any];
      } else if (!Array.isArray(props.children))
        props.children = State.createState<Array<Element>>([props.children as Element]);
      else
        props.children = State.createState(props.children) as any; // ToDo: fix this any here
    } else
      props.children = State.createState([]);

    _children = component(props as Parameters<Component>[0]);
    (_element as Element & { component: typeof component }).component = component;
    (_element as Element & { props: ({ children: typeof props.children }) }).props = State.createState({ ...attributes, children: props.children });
    (_element as Element & { props: State.State<unknown> }).props[State.PreserveState] = true;


    // let rootChildren = props.children;
    // props.children = document.createElement('slot');
    // let shadow = element.attachShadow({ mode: "open" });
    // let body = document.createElement('shadow-container');
    // body.style.display = "inline-block";
    // body.style.width = "-webkit-fill-available";
    // body.style.height = "-webkit-fill-available";
    // shadow.append(body);
    // body.append(...children);
    // Array.from(element.childNodes).find(_ => _.nodeValue?.trim() == oldValue.toString().trim())?.remove();
    // body.append(children);
    // Array.from(element.childNodes).find(_ => _.nodeValue?.trim() == oldValue.toString().trim())?.remove();

    // if (Array.isArray(children)) {
    //   element.append(...children.map(_ => _[State.Value] == null ? _ : _[State.Value]));
    //   children.map(_ => _[State.Value] == null ? _ : _[State.Value]).forEach(_ => _.onMount?.());
    //   children.filter(_ => _[State.Value] != null)
    //     .forEach(_ => _[State.Modified].on((newValue: any, oldValue: any) => {
    //       if (oldValue instanceof HTMLElement) {
    //         element.removeChild(oldValue);
    //         (oldValue as any).onUnmount();
    //         element.append(newValue);
    //         (newValue as any).onMount?.();
    //       } else
    //         (Array.from(element.childNodes).find(_ => _.nodeValue?.trim() == oldValue.toString().trim()) ?? { nodeValue: null }).nodeValue = newValue;
    //     }));
    // } else if (children != null) {
    //   element.append(children[State.Value] == null ? children : children[State.Value]);
    //   (children[State.Value] == null ? children : children[State.Value]).onMount?.();
    //   if (children[State.Value] != null) {
    //     children[State.Modified].on((newValue: any, oldValue: any) => {
    //       if (oldValue instanceof HTMLElement) {
    //         element.removeChild(oldValue);
    //         element.append(newValue);
    //       } else
    //         (Array.from(element.childNodes).find(_ => _.nodeValue?.trim() == oldValue.toString().trim()) ?? { nodeValue: null }).nodeValue = newValue;
    //     });
    //   }
    // }

    // if (Array.isArray(rootChildren))
    //   element.append(...rootChildren);
    // else if (rootChildren != null)
    //   element.append(rootChildren);
    // return element;
  } else {
    _children = props.children as any;
    delete (props.children);
    _element = createElement(component, props);

    // let children = props.children;
    // delete (props.children);
    // let element = createElement(component, props);
    // if (Array.isArray(children)) {
    //   element.append(...children.map(_ => _[State.Value] == null ? _ : _[State.Value]));
    //   children.filter(_ => _[State.Value] != null)
    //     .forEach(_ => _[State.Modified].on((newValue: any, oldValue: any) => {
    //       if (oldValue instanceof HTMLElement) {
    //         element.removeChild(oldValue);
    //         element.append(newValue);
    //       } else
    //         (Array.from(element.childNodes).find(_ => _.nodeValue?.trim() == oldValue.toString().trim()) ?? { nodeValue: null }).nodeValue = newValue;
    //       // Array.from(element.childNodes).find(_ => _.nodeValue?.trim() == oldValue.toString().trim())?.remove();
    //     }));
    // } else if (children != null) {
    //   element.append(children[State.Value] == null ? children : children[State.Value]);
    //   if (children[State.Value] != null) {
    //     children[State.Modified].on((newValue: any, oldValue: any) => {
    //       if (oldValue instanceof HTMLElement) {
    //         element.removeChild(oldValue);
    //         element.append(newValue);
    //       } else
    //         (Array.from(element.childNodes).find(_ => _.nodeValue?.trim() == oldValue.toString().trim()) ?? { nodeValue: null }).nodeValue = newValue;
    //       // Array.from(element.childNodes).find(_ => _.nodeValue?.trim() == oldValue.toString().trim())?.remove();
    //     });
    //   }
    // }
    // return element;
  }


  if (_children != null) {
    if (isState(_children)) {
      if (_children[State.Value] == null)
        _children[State.Value] = [];
      else if (!Array.isArray(_children[State.Value]))
        _children = State.createState([_children as any]);
    } else if (!Array.isArray(_children))
      _children = State.createState<Array<Element>>([_children as Element]);
    else
      _children = State.createState(_children) as any; // ToDo: fix this any here
  } else
    _children = State.createState([]);

  let element = _element as Element;
  let children = _children as State.State<Array<Element | string | number | boolean | null | undefined>>;

  // ToDo: fix state
  // (children.forEach as unknown as State.State<typeof children.forEach>)[State.Value](child => {
  children.forEach[State.Value](child => {
    if (child[State.Value] != null) {
      let childValue = child[State.Value] as Element | string | number | boolean;
      if (typeof childValue == 'object' && childValue instanceof Element) {
        element.append(childValue);
        childValue.dispatchEvent(new Event('mount'));
      } else {
        element.append(document.createTextNode(childValue.toString()));
      }
    }
    child[State.Modified].on((newValue, oldValue) => {
      if (oldValue != null) {
        if (typeof oldValue == 'object' && oldValue instanceof Element) {
          if (element.parentElement != null && oldValue.parentElement == element) {
            element.removeChild(oldValue);
            oldValue.dispatchEvent(new Event('unmount'));
          }
        } else {
          let node = Array.from(element.childNodes).filter(_ => _.nodeType == 3).find(_ => _.nodeValue?.trim() == oldValue.toString().trim());
          if (node)
            node.nodeValue = newValue?.toString() ?? null;
          // element.removeChild(node);
        }
      }
      if (newValue != null) {
        if (typeof newValue == 'object' && newValue instanceof Element) {
          element.append(newValue);
          newValue.dispatchEvent(new Event('mount'));
        } else {
          // element.append(document.createTextNode(newValue.toString()));
        }
      }
    });
  });
  children[State.ChildModified].on((newValue, key, oldValue) => {
    if (oldValue != null) {
      if (typeof oldValue == 'object' && oldValue instanceof Element) {
        if (element.parentElement != null && oldValue.parentElement == element) {
          element.removeChild(oldValue);
          oldValue.dispatchEvent(new Event('unmount'));
        }
      } else {
        let node = Array.from(element.childNodes).filter(_ => _.nodeType == 3).find(_ => _.nodeValue?.trim() == oldValue.toString().trim());
        if (node)
          node.nodeValue = newValue?.toString() ?? null;
        // element.removeChild(node);
      }
    }
    if (newValue != null) {
      if (typeof newValue == 'object' && newValue instanceof Element) {
        element.append(newValue);
        newValue.dispatchEvent(new Event('mount'));
      } else {
        // element.append(document.createTextNode(newValue.toString()));
      }
    }
  });
  // children[State.Modified].on((newValue, oldValue) => {
  //   console.log('Modified', newValue, oldValue);
  // })

  return element;
}
export const jsxs = jsx;
