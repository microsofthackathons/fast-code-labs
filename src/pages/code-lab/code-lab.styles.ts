import { css, ElementStyles } from '@microsoft/fast-element';
import { arrowLeftIcon, checkIcon, leftIcon, rightIcon, timerIcon } from '../../images';
import { mixin_svg_logo } from '../../styles';
import { styles as syntax_styles } from './syntax.styles';
import { styles as step_styles } from './step.styles';

export const styles: ElementStyles = css`
  ${step_styles}
  ${syntax_styles}
  :host {
    --lab-transition: height 2s;
    --lab-background: #424242;
    --lab-border: none;
    --lab-box-shadow: none;
    --lab-border-radius: 4px;
    --lab-font-family: aktiv-grotesk, 'Segoe UI', Arial, Helvetica, sans-serif;
    --lab-font: 400 14px/20px var(--lab-font-family);
    --lab-color: #e5e5e5;
    --lab-h3-font: 500 16px/20px var(--lab-font-family);
    --lab-h4-font: italic small-caps 400 14px/16px var(--lab-font-family);
    --lab-heading-color: #e8eaed;
    --lab-secondary-text-color: #cccccc;
    --lab-content-padding: 10px;
    --lab-date-font: 400 12px/16px var(--lab-font-family);
    --lab-summary-font: 400 14px/20px var(--lab-font-family);

    height: 100vh;

    /* grid container settings */
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: auto 9fr auto;
    grid-template-areas:
      'menu header header header header'
      'menu main main main main'
      'menu footer footer footer footer';
    color: #e5e5e5;
  }

  header {
    grid-area: header;
    background-color: #424242;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    height: 64px;
    font-weight: 500;
  }

  main {
    grid-area: main;
    padding: 15px 5px 10px 5px;
    overflow: auto;
    background-color: #434343;
  }

  aside {
    grid-area: menu;
    padding: 16px;
    background-color: #2b2b2b; //#2f3136;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
  }

  footer {
    grid-area: footer;
    position: fixed;
    right: 0;
    bottom: 16px;
    // padding: 0 16px;
    width: calc(100% - 300px);
    box-sizing: border-box;
    pointer-events: none;
  }

  header h3 {
    margin: 0 8px;
    color: inherit;
    font: var(--lab-h3-font);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex: 1;
  }

  .lab-nav-back a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
  }

  .icon {
    display: inline-block;
    margin-inline-end: 0;
    shape-rendering: geometricPrecision;
    position: relative;
    margin-inline-end: 0;
    display: -ms-inline-flexbox;
    display: -webkit-inline-flex;
    display: inline-flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    vertical-align: middle;
    width: 24px;
    height: 24px;
  }

  .icon-back {
    ${mixin_svg_logo(arrowLeftIcon)};
  }

  .icon-timer {
    ${mixin_svg_logo(timerIcon)};
  }

  .lab-duration {
    display: flex;
    display: -ms-flexbox;
    display: -webkit-flex;
    flex-direction: row;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .lab-duration span.duration {
    padding: 0 5px;
  }

  header {
    background-color: #da1a5f;
  }

  :host(.lab-category-javascript) header {
    background-color: #f1bf22;
    color: #000;
  }

  :host(.lab-category-javascript) header .icon-back {
    ${mixin_svg_logo(arrowLeftIcon, '#000')};
  }

  :host(.lab-category-javascript) header .icon-timer {
    ${mixin_svg_logo(timerIcon, '#000')};
  }

  :host(.lab-category-html) header {
    background-color: #ff5722;
    color: #fafafa;
  }

  :host(.lab-category-html) header .icon-back,
  :host(.lab-category-webcomponents) header .icon-back {
    ${mixin_svg_logo(arrowLeftIcon, '#fafafa')};
  }

  :host(.lab-category-html) header .icon-timer,
  :host(.lab-category-webcomponents) header .icon-back {
    ${mixin_svg_logo(arrowLeftIcon, '#fafafa')};
  }

  :host(.lab-category-css) header {
    background: #2062af;
  }

  :host(.lab-category-webcomponents) header {
    background-color: #e44d26;
    color: #fafafa;
  }

  :host(.lab-category-polymer) header {
    background: #616ca3;
  }

  .lab-toc {
    margin-bottom: 1.5em;
    max-width: 256px;
    list-style-type: none;
    margin: 0;
    overflow: hidden;
    -ms-flex: 1 1 0.000000001px;
    -webkit-flex: 1;
    flex: 1;
    -webkit-flex-basis: 0.000000001px;
    flex-basis: 0.000000001px;
    display: block;
    padding: 8px 0;
    cursor: pointer;
    line-height: 24px;
    font-size: 13px;
  }

  .lab-toc-item {
    font-size: 14px;
    // color: var(--neutral-foreground-rest);
    overflow: hidden;
    border-radius: 4px;
    padding: 6px 16px;
    box-sizing: content-box; /* override users that set * selector box-sizing. */
    font-weight: 400;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    flex-direction: row;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    font-family: 'Roboto', 'Noto', sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 24px;
    min-height: 48px;
    position: relative;
  }

  .lab-toc-item i {
    display: inline-block;
    font-style: normal;
    width: 24px;
    min-width: 24px;
    // background: #fff;
    border-radius: 50%;
    text-align: center;
    height: 24px;
    vertical-align: middle;
    line-height: 24px;
    border: 2px solid #fafafa;
    margin-right: 8px;
    font-weight: 400;
  }

  .lab-toc-item i::before,
  .lab-toc-item i::after {
    content: '';
    display: block;
    border-left: 1px solid #fafafa;
    width: 0;
    height: 44px;
    z-index: 1;
    margin-top: 1px;
  }

  .lab-toc-item i::before {
    margin-top: -44px;
    margin-left: 11px;
  }

  .lab-toc-item i::after {
    margin-left: 11px;
  }

  .lab-toc-item.completed {
    color: inherit;
  }

  .lab-toc-item.selected {
    background-color: #da1a5f;
    color: #fff;
    font-weight: 600;
  }

  :host(.lab-category-polymer) .lab-toc-item.selected {
    background-color: #616ca3;
  }

  :host(.lab-category-webcomponents) .lab-toc-item.selected {
    background-color: #e44d26;
  }

  :host(.lab-category-html) .lab-toc-item.selected {
    background-color: #ff5722;
    color: #fafafa;
  }

  :host(.lab-category-javascript) .lab-toc-item.selected {
    background-color: #f1bf22;
    color: #000;
  }

  :host(.lab-category-css) .lab-toc-item.selected {
    background-color: #2062af;
  }

  .lab-toc-item.completed i,
  .lab-toc-item.completed i::before,
  .lab-toc-item.completed i::after,
  .lab-toc-item.selected i,
  .lab-toc-item.selected i:before {
    border-color: #da1a5f;
    background-color: #fff;
    color: #da1a5f;
  }

  :host(.lab-category-polymer) .lab-toc-item.completed i,
  :host(.lab-category-polymer) .lab-toc-item.completed i::before,
  :host(.lab-category-polymer) .lab-toc-item.completed i::after,
  :host(.lab-category-polymer) .lab-toc-item.selected i,
  :host(.lab-category-polymer) .lab-toc-item.selected i:before {
    border-color: #616ca3;
    background-color: #fff;
    color: #616ca3;
  }

  :host(.lab-category-webcomponents) .lab-toc-item.completed i,
  :host(.lab-category-webcomponents) .lab-toc-item.completed i::before,
  :host(.lab-category-webcomponents) .lab-toc-item.completed i::after,
  :host(.lab-category-webcomponents) .lab-toc-item.selected i,
  :host(.lab-category-webcomponents) .lab-toc-item.selected i:before {
    border-color: #e44d26;
    background-color: #fafafa;
    color: #e44d26;
  }

  :host(.lab-category-html) .lab-toc-item.completed i,
  :host(.lab-category-html) .lab-toc-item.completed i::before,
  :host(.lab-category-html) .lab-toc-item.completed i::after,
  :host(.lab-category-html) .lab-toc-item.selected i,
  :host(.lab-category-html) .lab-toc-item.selected i:before {
    border-color: #ff5722;
    background-color: #fafafa;
    color: #ff5722;
  }

  :host(.lab-category-javascript) .lab-toc-item.completed i,
  :host(.lab-category-javascript) .lab-toc-item.completed i::before,
  :host(.lab-category-javascript) .lab-toc-item.completed i::after,
  :host(.lab-category-javascript) .lab-toc-item.selected i,
  :host(.lab-category-javascript) .lab-toc-item.selected i:before {
    border-color: #f1bf22;
    background-color: #fafafa;
    color: #000;
  }

  :host(.lab-category-css) .lab-toc-item.completed i,
  :host(.lab-category-css) .lab-toc-item.completed i::before,
  :host(.lab-category-css) .lab-toc-item.completed i::after,
  :host(.lab-category-css) .lab-toc-item.selected i,
  :host(.lab-category-css) .lab-toc-item.selected i:before {
    border-color: #2062af;
    background-color: #fafafa;
    color: #2062af;
  }

  .lab-toc-item:first-of-type i::before,
  .lab-toc-item:last-of-type i::after {
    display: none;
  }

  .step-nav-container {
    max-width: calc(800px + 175px);
    margin: 0 auto;

    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    flex-direction: row;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
  }

  .step-nav {
    pointer-events: initial;
    flex-shrink: 0;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 20%);
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    background-color: #da1a5f;
    border-radius: 50%;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    height: 56px;
    min-width: 0;
    outline: none;
    padding: 16px;
    position: relative;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    width: 56px;
    z-index: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    transition: transform 300ms ease-in-out;
  }

  :host(.lab-category-polymer) .step-nav:not(.step-nav-complete) {
    background-color: #616ca3;
  }

  :host(.lab-category-webcomponents) .step-nav:not(.step-nav-complete) {
    background-color: #e44d26;
    color: #fafafa;
  }

  :host(.lab-category-html) .step-nav:not(.step-nav-complete) {
    background-color: #ff5722;
    color: #fafafa;
  }

  :host(.lab-category-javascript) .step-nav:not(.step-nav-complete) {
    background-color: #f1bf22;
    color: #000;
  }

  :host(.lab-category-css) .step-nav:not(.step-nav-complete) {
    background-color: #2062af;
    color: #fafafa;
  }

  .step-nav-complete {
    background-color: #0f9d58;
  }

  .icon-left {
    ${mixin_svg_logo(leftIcon, '#fafafa')};
  }

  .icon-right {
    ${mixin_svg_logo(rightIcon, '#fafafa')};
  }

  .icon-complete {
    ${mixin_svg_logo(checkIcon, '#fafafa')};
  }

  .step-nav-invisible {
    transform: scale(0);
  }

  .lab-content {
    background-color: #2b2b2b;
    padding: 24px;
    line-height: 24px;
    font-size: 14px;
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 24px;
    overflow: hidden;
  }

  .lab-step-container {
  }

  .lab-step:not(.lab-step-selected):not(.lab-step-animating) {
    display: none;
    overflow: hidden;
    line-height: 24px;
  }

  .lab-step-selected {
    display: block;
  }

  /* animation sets */

  /* move from / to  */

  .lab-step-to-left {
    -webkit-animation: moveToLeft 0.6s ease both;
    animation: moveToLeft 0.6s ease both;
  }

  .lab-step-from-left {
    -webkit-animation: moveFromLeft 0.6s ease both;
    animation: moveFromLeft 0.6s ease both;
  }

  .lab-step-to-right {
    -webkit-animation: moveToRight 0.6s ease both;
    animation: moveToRight 0.6s ease both;
  }

  .lab-step-from-right {
    -webkit-animation: moveFromRight 0.6s ease both;
    animation: moveFromRight 0.6s ease both;
  }

  /********************************* keyframes **************************************/

  /* move from / to  */

  @-webkit-keyframes moveToLeft {
    from {
    }
    to {
      -webkit-transform: translateX(-100%);
    }
  }
  @keyframes moveToLeft {
    from {
    }
    to {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }

  @-webkit-keyframes moveFromLeft {
    from {
      -webkit-transform: translateX(-100%);
    }
  }
  @keyframes moveFromLeft {
    from {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }

  @-webkit-keyframes moveToRight {
    from {
    }
    to {
      -webkit-transform: translateX(100%);
    }
  }
  @keyframes moveToRight {
    from {
    }
    to {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }

  @-webkit-keyframes moveFromRight {
    from {
      -webkit-transform: translateX(100%);
    }
  }
  @keyframes moveFromRight {
    from {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }

  @media (min-width: 641px) {
    footer {
      padding: 0 32px;
      bottom: 32px;
    }
  }

  @media screen and (max-width: 1200px) {
    :host {
      grid-template-columns: 1fr 3fr;
    }
  }

  @media screen and (max-width: 990px) {
    :host {
      grid-template-columns: 1fr 2fr;
    }
  }
`;
