import { designSystem } from "../../design-system.js";
import { template } from "./welcome.template.js";
import { styles } from "./welcome.styles.js";
import { Welcome } from "./welcome.js";

export const definition = Welcome.compose({
  name: `${designSystem.prefix}-welcome`,
  template,
  styles,
  shadowOptions: {
    mode: designSystem.shadowRootMode,
    delegatesFocus: true,
  },
});
