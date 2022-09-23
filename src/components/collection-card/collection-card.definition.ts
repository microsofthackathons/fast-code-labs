import { designSystem } from '../../design-system';
import { template } from './collection-card..template';
import { styles } from './collection-card.styles';
import { CodeLabsCollectionCard } from './collection-card';

export const definition = CodeLabsCollectionCard.compose({
  name: `${designSystem.prefix}-collection-card`,
  template,
  styles,
  shadowOptions: {
    mode: designSystem.shadowRootMode,
    delegatesFocus: true,
  },
});
