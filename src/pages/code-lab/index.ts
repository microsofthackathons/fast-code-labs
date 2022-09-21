import { css, FASTElement, html, observable } from '@microsoft/fast-element';
import { designSystem } from '../../design-system';

class CodeLab extends FASTElement {
  @observable collection!: string;
  @observable lab!: string;
}

const template = html<CodeLab>`
  <h1>
    ${x => x.lab} lab inside the
    <a href="/code-labs/${x => x.collection}"
      >'${x => x.collection.toUpperCase()}'</a
    >
    collection
  </h1>
`;

const styles = css`
  :host {
    contain: content;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    justify-content: center;
  }
`;

const definition = CodeLab.compose({
  name: `${designSystem.prefix}-lab`,
  template,
  styles,
  shadowOptions: {
    mode: designSystem.shadowRootMode,
    delegatesFocus: true,
  },
});

definition.define(designSystem.registry);

export default CodeLab;
