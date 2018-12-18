export function sampleNumber(schema) {
  let res;
  if (schema.maximum && schema.minimum) {
    res = schema.exclusiveMinimum ? Math.floor(schema.minimum) + 1 : schema.minimum;
    if ((schema.exclusiveMaximum && res >= schema.maximum) ||
      ((!schema.exclusiveMaximum && res > schema.maximum))) {
      res = (schema.maximum + schema.minimum) / 2;
    }
    return res;
  }
  if (schema.minimum) {
    if (schema.exclusiveMinimum) {
      return Math.floor(schema.minimum) + 1;
    } else {
      return schema.minimum;
    }
  }
  if (schema.maximum) {
    if (schema.exclusiveMaximum) {
      return (schema.maximum > 0) ? 0 : Math.floor(schema.maximum) - 1;
    } else {
      return (schema.maximum > 0) ? 0 : schema.maximum;
    }
  }

  return 0;
}
