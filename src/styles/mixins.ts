export const mixin_svg_logo = (
  base64SVG: string,
  fillColor: string = '#e5e5e5'
) => `
    -webkit-mask: url("${base64SVG}") no-repeat 50% 50%;
    mask: url("${base64SVG}") no-repeat 50% 50%;
    -webkit-mask-size: contain;
    mask-size: contain;
    background-color: ${fillColor};
`;
