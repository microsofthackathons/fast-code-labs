import { css, FASTElement, html } from '@microsoft/fast-element';
import { designSystem } from '../../design-system';
import { styles_fontFaces } from '../../styles';
import { CodeLabsRoutes } from './code-labs-routes';
import '../../components';

class CodeLabs extends FASTElement {
  routerConfiguration: CodeLabsRoutes = new CodeLabsRoutes();
}

const template = html<CodeLabs>`
  <fast-router :config=${x => x.routerConfiguration}></fast-router>
`;

const styles = css`
  ${styles_fontFaces}

  :host {
    contain: content;
  }

  :host,
  fast-router {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const definition = CodeLabs.compose({
  name: `${designSystem.prefix}-labs`,
  template,
  styles,
  shadowOptions: {
    mode: designSystem.shadowRootMode,
    delegatesFocus: true,
  },
});

definition.define(designSystem.registry);

export default CodeLabs;
