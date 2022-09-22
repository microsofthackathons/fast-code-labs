import { NavigationPhase, RouterConfiguration } from '@microsoft/fast-router';
import { Constructable } from '@microsoft/fast-element';
import { Container, inject } from '@microsoft/fast-element/di';

import { CodeLab, CodeLabs, HomeScreen } from './pages';

type RouteSettings = {
  public?: boolean;
};

export class AppRouterConfiguration extends RouterConfiguration<RouteSettings> {
  constructor(@inject(Container) private container: any) {
    super();
  }

  public configure() {
    this.title = 'Welcome to FAST Code Labs!';
    this.routes.map(
      { path: '', redirect: 'home' },
      { name: 'home', path: 'code-labs', element: HomeScreen, title: 'Home' },
      {
        name: 'codeLabs',
        path: 'code-labs/{collection}',
        title: 'Code Labs',
        element: CodeLabs,
        childRouters: false,
      },
      {
        name: 'lab',
        path: 'code-labs/{collection}/{lab}',
        title: 'Code Labs',
        element: CodeLab,
        childRouters: false,
      }
      // { path: 'not-found', title: 'Not Found', element: HomeScreen }
    );

    this.routes.fallback(() => ({ redirect: 'home' }));

    this.contributors.push({
      navigate(phase: NavigationPhase<RouteSettings>) {
        const settings = phase.route.settings;

        if (settings && settings.public) {
          return;
        }
      },
    });
  }

  public construct<T>(Type: Constructable<T>): T {
    return this.container.get(Type) as T;
  }
}
