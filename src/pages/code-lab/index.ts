import { css, FASTElement, html, observable } from '@microsoft/fast-element';
import { designSystem } from '../../design-system';

class CodeLabScreen extends FASTElement {
  @observable collectionName!: string;
  @observable labName!: string;
}

const template = html<CodeLabScreen>`
  <h1>
    ${x => x.labName} lab inside the
    <a href="/code-labs/${x => x.collectionName}"
      >'${x => x.collectionName.toUpperCase()}'</a
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

const definition = CodeLabScreen.compose({
  name: `${designSystem.prefix}-lab`,
  template,
  styles,
  shadowOptions: {
    mode: designSystem.shadowRootMode,
    delegatesFocus: true,
  },
});

definition.define(designSystem.registry);

export default CodeLabScreen;
