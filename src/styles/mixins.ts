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

export const mixin_screen = (display: string = 'block') => `
  contain: content;
  display: ${display};
  height: 100%;
  width: 100%;
  overflow-y: auto;
`;

export const mixin_cardStyles = `
  padding: 4px 16px 16px 16px;
`;

export const mixin_boxShadow = `
  --elevation: 4;
  box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(255, 255, 255, calc(0.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(255, 255, 255, calc(0.13 * (2 - var(--background-luminance, 1))));
`;
