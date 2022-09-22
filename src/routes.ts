import { NavigationPhase, RouterConfiguration } from '@microsoft/fast-router';

import { CodeLabs, HomeScreen } from './pages';

type RouteSettings = {
  public?: boolean;
};

export class AppRouterConfiguration extends RouterConfiguration<RouteSettings> {
  public configure() {
    this.title = 'Welcome to FAST Code Labs!';
    this.routes.map(
      // { path: '', redirect: 'home' },
      { name: 'home', path: '', element: HomeScreen, title: 'Home' },
      {
        name: 'codeLabs',
        path: 'code-labs',
        title: 'Code Labs',
        element: CodeLabs,
        childRouters: true,
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
}
