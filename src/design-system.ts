import { DesignToken } from '@microsoft/fast-foundation';

export const designSystem = Object.freeze({
  prefix: 'fast-codelabs',
  shadowRootMode: 'open',
  registry: customElements,
});

export const disabledOpacity =
  DesignToken.create<number>('disabled-opacity').withDefault(0.3);
