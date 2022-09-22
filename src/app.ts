import { css, FASTElement, html, observable } from '@microsoft/fast-element';
import { Container, inject /*, Registration */ } from '@microsoft/fast-element/di';
// import { DefaultRouteRecognizer } from '@microsoft/fast-router';
import { designSystem } from './design-system';
import { styles_fontFaces } from './styles';
import { AppRouterConfiguration } from './routes';
import './components';

class FASTCodeLabsApp extends FASTElement {
  @inject(AppRouterConfiguration) routerConfiguration!: AppRouterConfiguration;
  @inject(Container) container!: any;
  @observable provider!: any;
  // routerConfiguration: AppRouterConfiguration = new AppRouterConfiguration();

  // connectedCallback() {
  //   this.container.register(
  //     Registration.transient(DefaultRouteRecognizer, DefaultRouteRecognizer)
  //   );
  // }

  // providerChanged() {
  //   this.provider.registerCSSCustomProperty(neutralLayerL1Behavior);

  //   this.provider.style.setProperty(
  //     'background-color',
  //     `var(--${neutralLayerL1Behavior.name})`
  //   );

  //   this.provider.backgroundColor = (neutralLayerL1Behavior.value as any)(
  //     this.provider.designSystem
  //   );

  //   this.provider.baseLayerLuminance = 1;
  // }
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
