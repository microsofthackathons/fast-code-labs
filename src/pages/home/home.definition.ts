import { designSystem } from '../../design-system';
import { template } from './home.template';
import { styles } from './home.styles';
import { HomeScreen } from './home';

export const definition = HomeScreen.compose({
  name: `${designSystem.prefix}-home`,
  template,
  styles,
  shadowOptions: {
    mode: designSystem.shadowRootMode,
    delegatesFocus: true,
  },
});
