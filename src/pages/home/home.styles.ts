import { css, ElementStyles } from '@microsoft/fast-element';
import { fastLogo, fastTextLogo } from '../../images';
import { mixin_svg_logo } from '../../styles';

/**
 * Styles for FASTCodeLabsApp
 * @public
 */
export const styles: ElementStyles = css`
  :host > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 48px;
    text-align: center;
    font-family: aktiv-grotesk, 'Segoe UI', Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: 20px;
    min-height: 100vh;
    color: #e5e5e5;
    background: #181818;
  }

  h1 {
    display: flex;
    column-gap: 18px;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 60px;
    line-height: 72px;
  }

  h1 span {
    display: flex;
    align-items: center;
  }

  h2 {
    font-size: 34px;
    line-height: 44px;
  }

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 16px;
  }

  header,
  main,
  footer {
    padding: 5px 12px;
  }

  header {
    display: flex;
    flex-direction: column;
  }

  header p {
    max-width: 900px;
    align-self: center;
    font-size: 20px;
    line-height: 28px;
  }

  .icon {
    display: inline-block;
    width: 90px;
    height: 80px;
    margin-inline-end: 10px;
    shape-rendering: geometricPrecision;
  }

  .icon-brand-fast {
    ${mixin_svg_logo(fastTextLogo)};
  }

  .icon-brand {
    ${mixin_svg_logo(fastLogo, '#ff4387')};
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 24px;
    row-gap: 24px;
  }
`;
