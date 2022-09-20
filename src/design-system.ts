import { css } from "@microsoft/fast-element";
import { DesignToken } from "@microsoft/fast-foundation";

export const designSystem = Object.freeze({
  prefix: "fast",
  shadowRootMode: "open",
  registry: customElements,
});

export const disabledOpacity =
  DesignToken.create<number>("disabled-opacity").withDefault(0.3);

export const heightNumber = css.partial`32`;
