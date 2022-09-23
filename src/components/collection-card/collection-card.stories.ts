import { designSystem } from '../../design-system';
import Template from './fixtures/base.html';
import { definition } from './collection-card.definition';

definition.define(designSystem.registry);

export default {
  title: 'CodeLabs Collection Card',
};

export const CodeLabsCollectionCard: () => '*.html' = () => Template;
