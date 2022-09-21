import { designSystem } from "../design-system.js";
import { template } from "./app.template.js";
import { styles } from "./app.styles.js";
import { FASTCodeLabsApp } from "./app.js";

export const definition = FASTCodeLabsApp.compose({
  name: `${designSystem.prefix}-app`,
  template,
  styles,
  shadowOptions: {
    mode: designSystem.shadowRootMode,
    delegatesFocus: true,
  },
});
