import { designSystem } from "../../design-system.js";
import { template } from "./home.template.js";
import { styles } from "./home.styles.js";
import { HomeScreen } from "./home.js";

export const definition = HomeScreen.compose({
  name: `${designSystem.prefix}-home`,
  template,
  styles,
  shadowOptions: {
    mode: designSystem.shadowRootMode,
    delegatesFocus: true,
  },
});
