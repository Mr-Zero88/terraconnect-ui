import * as NodeGUI from '@nodegui/nodegui';
import { Element } from './element';

export function executeAplication(element: Element) {
  const resolve = (element: Element): any => {
    if(element.type instanceof Function) {
      let result = element.type(element.props);
      return [
        element.type.name,
        Array.isArray(result) ? result.map(resolve): [resolve(result)]
      ];
    }else {
      return ['TEXT', element];
    }
  }
  console.log(JSON.stringify(resolve(element)));
}