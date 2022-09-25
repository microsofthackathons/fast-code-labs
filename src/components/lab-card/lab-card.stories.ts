import { designSystem } from '../../design-system';
import Template from './fixtures/base.html';
import { definition } from './lab-card.definition';

definition.define(designSystem.registry);

export default {
  title: 'CodeLabs Lab Card',
};

export const CodeLabsLabCard: () => '*.html' = () => Template;
