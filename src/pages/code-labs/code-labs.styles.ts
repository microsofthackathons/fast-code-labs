import { css, ElementStyles } from '@microsoft/fast-element';

export const styles: ElementStyles = css`
  :host {
    contain: content;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: stretch;
    display: flex;
    flex-direction: column;
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

  main {
    flex-grow: 5;
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

  .lab-card-group {
    display: grid;
    gap: var(--lab-item-gap, 24px);
    grid: auto-flow/repeat(var(--lab-columns, 4), 1fr);
  }

  .lab-card-sort-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    column-gap: 0;
    row-gap: 0;
    margin: 10px 0;
  }

  .lab-card-sort {
    background: inherit; // #424242;
    text-align: left;
    display: flex;
    flex-direction: column;
    border: none;
    font-family: aktiv-grotesk, 'Segoe UI', Arial, Helvetica, sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #e5e5e5;
    text-align: center;
    font-weight: 400;
    padding: 10px;
  }

  .lab-card-sort:hover {
    background: #424242;
    cursor: pointer;
  }

  .lab-card-sort.active:after {
    content: '';
    border: 1px solid #da1a5f;
  }

  @media screen and (max-width: 990px) {
    .lab-card-group {
      --lab-columns: 3;
    }
  }

  @media screen and (max-width: 768px) {
    .lab-card-group {
      --lab-columns: 2;
    }
  }

  @media screen and (max-width: 600px) {
    .lab-card-group {
      display: block;
    }
  }
`;
