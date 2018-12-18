import { traverse } from './traverse';
import { mergeDeep } from './utils';

export function allOfSample(into, children, options, spec) {
  let res = traverse(into, options, spec);
  const subSamples = [];

  for (let subSchema of children) {
    const { type, readOnly, writeOnly, value } = traverse({ type, ...subSchema }, options, spec);
    if (res.type && type && type !== res.type) {
      throw new Error('allOf: schemas with different types can\'t be merged');
    }
    res.type = res.type || type;
    res.readOnly = res.readOnly || readOnly;
    res.writeOnly = res.writeOnly || writeOnly;
    if (value != null) subSamples.push(value);
  }

  if (res.type === 'object') {
    res.value = mergeDeep(res.value || {}, ...subSamples);
    return res;
  } else {
    if (res.type === 'array') {
      // TODO: implement arrays
      console.warn('OpenAPI Sampler: found allOf with "array" type. Result may be incorrect');
    }
    const lastSample = subSamples[subSamples.length - 1];
    res.value = lastSample != null ? lastSample : res.value;
    return res;
  }
}
