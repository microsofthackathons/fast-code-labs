import { designSystem } from '../../design-system';
import { CodeLabScreen } from './code-lab';
import { template } from './code-lab.template';
import { styles } from './code-lab.styles';

export const definition = CodeLabScreen.compose({
  name: `${designSystem.prefix}-lab`,
  template,
  styles,
  shadowOptions: {
    mode: designSystem.shadowRootMode,
    delegatesFocus: true,
  },
});
