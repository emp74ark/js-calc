export function calculate(values) {
  try {
    const result = new Function(`return ${values}`)();
    if (isNaN(result) || !isFinite(result)) {
      return 0;
    }
    return result;
  } catch (error) {
    return 0;
  }
}

export function toOpposite(values) {
  const elements = values.split(/[+\-*%//]/)
  if (values.length !== elements.length) {
    return `-(${values})`;
  }
  return values * -1;
}