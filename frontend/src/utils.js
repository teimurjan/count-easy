import {inject, observer} from "mobx-react";
import {pick} from "lodash";

export function injectStore(storeName, component) {
  return inject(stores => stores[storeName])(observer(component));
}

export function injectStoreWithSchema(storeName, schema, component) {
  return inject(stores => pickWithSchema(stores[storeName], schema))(observer(component));
}

function pickWithSchema(obj, schema) {
  if (schema instanceof Array) return pick(obj, schema);
  return Object.keys(schema).reduce((acc, objKey) => {
    let storeKey = schema[objKey];
    if (storeKey in obj) acc[objKey] = obj[storeKey];
    return acc;
  }, {})
}