const colorCodeToDetail = (code: string) => {
  const codeWithoutSharp = code.replace('#', '');

  const red = parseInt(codeWithoutSharp.substring(0, 2), 16);
  const green = parseInt(codeWithoutSharp.substring(2, 4), 16);
  const blue = parseInt(codeWithoutSharp.substring(4, 6), 16);

  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);

  const brightness = max;
  const saturation = Number(((max - min) / max).toPrecision(2));

  return {
    code: '#' + codeWithoutSharp,
    red,
    green,
    blue,
    brightness,
    saturation,
  };
};

export const colorPaletteToDetails = (palette: Record<number, string>) => {
  return Object.entries(palette).map(([number, code]) => {
    const detail = colorCodeToDetail(code);
    return {
      number,
      ...detail,
    };
  });
};
