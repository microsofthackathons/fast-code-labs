import { css, ElementStyles } from "@microsoft/fast-element";
import {
  accessibilityLogo,
  customElementsLogo,
  fastLogo,
  fastTextLogo,
  linkLogo,
  performanceLogo,
  pwaLogo,
  webDevLogo,
} from "../images/index.js";

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
    font-family: aktiv-grotesk, "Segoe UI", Arial, Helvetica, sans-serif;
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
    padding: 0 12px;
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
    -webkit-mask: url("${fastTextLogo}") no-repeat 50% 50%;
    mask: url("${fastTextLogo}") no-repeat 50% 50%;
    -webkit-mask-size: contain;
    mask-size: contain;
    background-color: #e5e5e5;
  }

  .icon-brand {
    -webkit-mask: url("${fastLogo}") no-repeat 50% 50%;
    mask: url("${fastLogo}") no-repeat 50% 50%;
    -webkit-mask-size: contain;
    mask-size: contain;
    background-color: #ff4387;
  }

  .icon-custom-elements {
    -webkit-mask: url("${customElementsLogo}") no-repeat 50% 50%;
    mask: url("${customElementsLogo}") no-repeat 50% 50%;
    -webkit-mask-size: contain;
    mask-size: contain;
  }

  .icon-pwa {
    -webkit-mask: url("${pwaLogo}") no-repeat 50% 50%;
    mask: url("${pwaLogo}") no-repeat 50% 50%;
    -webkit-mask-size: contain;
    mask-size: contain;
  }

  .icon-accesibility {
    -webkit-mask: url("${accessibilityLogo}") no-repeat 50% 50%;
    mask: url("${accessibilityLogo}") no-repeat 50% 50%;
    -webkit-mask-size: contain;
    mask-size: contain;
  }

  .icon-performance {
    -webkit-mask: url("${performanceLogo}") no-repeat 50% 50%;
    mask: url("${performanceLogo}") no-repeat 50% 50%;
    -webkit-mask-size: contain;
    mask-size: contain;
  }

  .icon-web {
    -webkit-mask: url("${webDevLogo}") no-repeat 50% 50%;
    mask: url("${webDevLogo}") no-repeat 50% 50%;
    -webkit-mask-size: contain;
    mask-size: contain;
    background-color: #e5e5e5;
  }

  .icon-action {
    -webkit-mask: url("${linkLogo}") no-repeat 50% 50%;
    mask: url("${linkLogo}") no-repeat 50% 50%;
    -webkit-mask-size: contain;
    mask-size: contain;
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 24px;
    row-gap: 24px;
  }

  .card {
    width: 320px;
    border-radius: 4px;
    background: #424242;
    text-align: left;
    display: flex;
    flex-direction: column;
  }

  .card .image {
    background: #2b2b2b;
    padding: 44px 0;
  }

  .card .image .icon {
    background-color: #e5e5e5;
  }

  .card .image .icon {
    width: 320px;
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
  }

  a {
    color: #ffffff;
  }
`;
