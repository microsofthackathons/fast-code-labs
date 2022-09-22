declare module '*.html';

declare module '*.svg' {
  const value: any;
  export default value;
}

declare module '@microsoft/fast-element/di';
