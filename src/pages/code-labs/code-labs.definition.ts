import { designSystem } from '../../design-system';
import { template } from './code-labs.template';
import { styles } from './code-labs.styles';
import { CodeLabsScreen } from './code-labs';

export const definition = CodeLabsScreen.compose({
  name: `${designSystem.prefix}-dashboard`,
  template,
  styles,
  shadowOptions: {
    mode: designSystem.shadowRootMode,
    delegatesFocus: true,
  },
});
