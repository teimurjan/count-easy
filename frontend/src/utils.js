import { inject, observer } from "mobx-react";
import { pick } from "lodash";

export function injectStore(storeName, component) {
  return inject(stores => stores[storeName])(observer(component));
}

export function injectStoreWithSchema(schema, component) {
  return inject(stores =>
    Object.keys(schema).reduce(
      (acc, storeName) => ({
        ...acc,
        ...pickWithSchema(stores[storeName], schema[storeName])
      }),
      {}
    )
  )(observer(component));
}

function pickWithSchema(obj, schema) {
  if (schema instanceof Array) return pick(obj, schema);
  return Object.keys(schema).reduce((acc, objKey) => {
    let storeKey = schema[objKey];
    if (storeKey in obj) acc[objKey] = obj[storeKey];
    return acc;
  }, {});
}
