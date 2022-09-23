import { css, ElementStyles } from '@microsoft/fast-element';

export const styles: ElementStyles = css`
  :host {
    contain: content;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    justify-content: center;
  }
`;
