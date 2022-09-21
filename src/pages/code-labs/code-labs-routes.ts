import { RouterConfiguration } from '@microsoft/fast-router';
import CodeLab from '../code-lab';
import HomeScreen from '../home';
import CodeLabsDashboard from './code-labs-dahsboard';

export class CodeLabsRoutes extends RouterConfiguration {
  configure() {
    this.routes.map(
      { path: '', element: HomeScreen },
      {
        path: '/{collection}',
        element: CodeLabsDashboard,
      },
      {
        path: '/{collection}/{lab}',
        element: CodeLab,
      }
    );
  }
}
