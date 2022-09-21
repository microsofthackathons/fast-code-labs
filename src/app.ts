import { css, FASTElement, html } from '@microsoft/fast-element';
import { designSystem } from './design-system';
import { styles_fontFaces } from './styles';
import { AppRouterConfiguration } from './routes';
import './components';

class FASTCodeLabsApp extends FASTElement {
  routerConfiguration: AppRouterConfiguration = new AppRouterConfiguration();
}

const template = html<FASTCodeLabsApp>`
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

const definition = FASTCodeLabsApp.compose({
  name: `${designSystem.prefix}-app`,
  template,
  styles,
  shadowOptions: {
    mode: designSystem.shadowRootMode,
    delegatesFocus: true,
  },
});

definition.define(designSystem.registry);
