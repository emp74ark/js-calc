export function calculate(values) {
  try {
    if (/\d%/.test(values)) {
      values = values.replaceAll(/\d%/g, (match) => {
        return (parseInt(match.replace('%', '')) / 100);
      });
    }

    const result = new Function(`return ${ values }`)();

    if (isNaN(result) || !isFinite(result)) {
      return 0;
    }

    return result;
  } catch (error) {
    return 0;
  }
}

export function toOpposite(values) {
  try {
    const elements = values.split(/[+\-*%//]/);
    if (values.length !== elements.length) {
      return `-(${ values })`;
    }
    return values * -1;
  } catch (error) {
    return 0;
  }
}