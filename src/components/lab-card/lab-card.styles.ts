import { css, ElementStyles } from '@microsoft/fast-element';
import {
  angularLogo,
  calendarIcon,
  cssLogo,
  htmlLogo,
  javaScriptLogo,
  linkLogo,
  polymerLogo,
  timerIcon,
  webComponentsLogo,
} from '../../images';
import { mixin_svg_logo } from '../../styles';

/**
 * Styles for Card
 * @public
 */
export const styles: ElementStyles = css`
  :host {
    --lab-card-transition: height 2s;
    --lab-card-background: #424242;
    --lab-card-border: none;
    --lab-card-box-shadow: none;
    --lab-card-border-radius: 4px;
    --lab-card-font-family: aktiv-grotesk, 'Segoe UI', Arial, Helvetica,
      sans-serif;
    --lab-card-font: 400 14px/20px var(--lab-card-font-family);
    --lab-card-color: #e5e5e5;
    --lab-card-h3-font: 700 20px/28px var(--lab-card-font-family);
    --lab-card-h4-font: italic small-caps 400 14px/16px
      var(--lab-card-font-family);
    --lab-card-heading-color: #e8eaed;
    --lab-card-secondary-text-color: #cccccc;
    --lab-card-content-padding: 10px;
    --lab-card-date-font: 400 12px/16px var(--lab-card-font-family);
    --lab-card-summary-font: 400 14px/20px var(--lab-card-font-family);

    background: var(--lab-card-background);
    border: var(--lab-card-border);
    border-radius: var(--lab-card-border-radius);
    box-shadow: var(--lab-card-box-shadow);
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    position: relative;
    -webkit-transition: var(--lab-card-transition, 0);
    transition: var(--lab-card-transition, 0);
    font: var(--lab-card-font);
    color: var(--lab-card-color);
    background: var(--lab-card-background);
    text-align: left;
  }

  .lab-card-header {
    background: #2b2b2b;
    padding: var(--lab-card-content-padding);
    height: 80px;
  }

  h3 {
    margin: 10px 0;
    font: var(--lab-card-h3-font);
    color: var(--lab-card-heading-color);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  h4 {
    margin: 0 0 10px 0;
    font: var(--lab-card-h4-font);
    color: var(--lab-card-secondary-text-color);
  }

  .lab-card-content {
    -webkit-box-flex: var(--lab-card-content-flex, 1 0);
    -webkit-flex: var(--lab-card-content-flex, 1 0);
    -moz-box-flex: var(--lab-card-content-flex, 1 0);
    -ms-flex: var(--lab-card-content-flex, 1 0);
    flex: var(--lab-card-content-flex, 1 0);
    word-break: break-word;
  }

  .lab-card-section {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    gap: 16px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: var(--lab-card-content-padding);
  }

  .lab-card-date,
  .lab-card-duration {
    color: var(--lab-card-date-color, var(--lab-card-secondary-text-color));
    font: var(--lab-card-date-font);
    letter-spacing: var(--lab-card-date-letter-spacing, 0.3px);
    margin: 0;
  }

  .lab-card-summary {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    color: var(--lab-card-summary-color, inherit);
    display: -webkit-box;
    font: var(--lab-card-summary-font);
    text-align: left;
    max-height: 96px;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: var(--lab-card-content-padding);
    margin: 0;
  }

  .lab-card-buttons {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: row-reverse;
    -moz-box-orient: horizontal;
    -moz-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    margin: auto 0 0;
  }

  .lab-card-content + .lab-card-buttons,
  .lab-card-content + .lab-card-section .lab-card-buttons {
    padding-top: 0;
  }

  .lab-card-icons {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;
  }

  .lab-card-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ffffff;
    background-size: 70%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }

  .lab-card-icon-javascript {
    background-image: url(${javaScriptLogo});
  }

  .lab-card-icon-webcomponents {
    background-image: url(${webComponentsLogo});
  }

  .lab-card-icon-polymer {
    background-image: url(${polymerLogo});
  }

  .lab-card-icon-angular {
    background-image: url(${angularLogo});
  }

  .lab-card-icon-html {
    background-image: url(${htmlLogo});
  }

  .lab-card-icon-css {
    background-image: url(${cssLogo});
  }

  .lab-card-buttons .button {
    padding: 10px;
    background: #da1a5f;
  }

  .lab-card-buttons .button-javascript {
    background: #f1bf22;
    color: #000;
  }

  .lab-card-buttons .button-javascript .icon-action {
    ${mixin_svg_logo(linkLogo, '#000')};
  }

  .lab-card-buttons .button-html {
    background: #ff5722;
    color: #fafafa;
  }

  .lab-card-buttons .button-html .icon-action {
    ${mixin_svg_logo(linkLogo, '#fafafa')};
  }

  .lab-card-buttons .button-css {
    background: #2062af;
  }

  .lab-card-buttons .button-webcomponents {
    background: #e44d26;
    color: #efefef;
  }

  .lab-card-buttons .button-webcomponents .icon-action {
    ${mixin_svg_logo(linkLogo, '#efefef')};
  }

  .lab-card-buttons .button-polymer {
    background: #616ca3;
  }

  .lab-card-buttons .icon {
    margin-left: 2px;
    position: relative;
    top: 1px;
    background-color: #e5e5e5;
    height: 0;
    width: 0;
    margin-inline-end: 0;
    display: inline-block;
    transition: 0.5s;
    opacity: 0;
  }

  .lab-card-buttons a {
    display: inline-block;
    border-radius: 4px;
    text-decoration: none;
    padding: 10px;
    color: #ffffff;
    font-weight: 700;
    transition: opacity 0.5s;
  }

  .lab-card-buttons a:hover .icon {
    padding-right: 10px;
    opacity: 1;
    right: 0;
    height: 14px;
    width: 14px;
  }

  .icon {
    display: inline-block;
    width: 90px;
    height: 80px;
    margin-inline-end: 10px;
    shape-rendering: geometricPrecision;
  }

  .icon-action {
    ${mixin_svg_logo(linkLogo)};
  }

  .icon-timer {
    ${mixin_svg_logo(timerIcon)};
    height: 14px;
    width: 14px;
    top: 2px;
    position: relative;
    margin-inline-end: 0;
  }

  .icon-calendar {
    ${mixin_svg_logo(calendarIcon)};
    height: 14px;
    width: 14px;
    top: 2px;
    position: relative;
    margin-inline-end: 0;
  }

  @media screen and (max-width: 990px) {
    .lab-card-icon {
      width: 32px;
      height: 32px;
      gap: 5px;
    }
  }

  @media screen and (max-width: 600px) {
    .lab-card-summary {
      font-size: 14px;
      line-height: 20px;
      max-height: 80px;
    }
  }
`;
