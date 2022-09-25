import { css, ElementStyles } from '@microsoft/fast-element';
import {
  accessibilityLogo,
  customElementsLogo,
  fastLogo,
  fastTextLogo,
  linkLogo,
  performanceLogo,
  pwaLogo,
  webDevLogo,
} from '../../images';
import { mixin_boxShadow, mixin_svg_logo } from '../../styles';

/**
 * Styles for Card
 * @public
 */
export const styles: ElementStyles = css`
  :host {
    --background-luminance: 0.8;
    display: block;
  }

  .card {
    // ${mixin_boxShadow};
    width: 320px;
    height: 100%;
    border-radius: 4px;
    background: #424242;
    text-align: left;
    display: flex;
    flex-direction: column;
    border: none;
    font-family: aktiv-grotesk, 'Segoe UI', Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #e5e5e5;
  }

  h3 {
    font-size: 20px;
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

  .icon-custom-elements {
    ${mixin_svg_logo(customElementsLogo)};
  }

  .icon-pwa {
    ${mixin_svg_logo(pwaLogo)};
  }

  .icon-accessibility {
    ${mixin_svg_logo(accessibilityLogo)};
  }

  .icon-performance {
    ${mixin_svg_logo(performanceLogo)};
  }

  .icon-web {
    ${mixin_svg_logo(webDevLogo)};
  }

  .icon-action {
    ${mixin_svg_logo(linkLogo)};
  }

  .card .image {
    background: #2b2b2b;
    padding: 44px 0;
  }

  .card .image .icon {
    background-color: #e5e5e5;
  }

  .card .image .icon {
    width: 100%;
    height: 80px;
  }

  .card .image.small {
    padding: 54px 0;
  }

  .card .image.small .icon {
    height: 60px;
  }

  .card .content {
    padding: 10px 15px;
    flex-grow: 1;
  }

  .card .action {
    padding: 10px 15px;
  }

  .card .action .icon {
    margin-left: 2px;
    position: relative;
    top: 1px;
    background-color: #e5e5e5;
    height: 14px;
    width: 14px;
    margin-inline-end: 0;
  }

  .card a {
    display: inline-block;
    background: #da1a5f;
    border-radius: 4px;
    text-decoration: none;
    padding: 10px;
    color: #ffffff;
  }

  .card a.disabled {
    background: #666666;
    pointer-events: none;
  }

  a {
    color: #ffffff;
  }
`;
