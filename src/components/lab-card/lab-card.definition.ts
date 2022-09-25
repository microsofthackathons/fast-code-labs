import { designSystem } from '../../design-system';
import { template } from './lab-card.template';
import { styles } from './lab-card.styles';
import { CodeLabsLabCard } from './lab-card';

export const definition = CodeLabsLabCard.compose({
  name: `${designSystem.prefix}-lab-card`,
  template,
  styles,
  shadowOptions: {
    mode: 'closed', //designSystem.shadowRootMode,
    delegatesFocus: true,
  },
});
