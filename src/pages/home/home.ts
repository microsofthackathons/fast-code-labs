import { FASTElement, observable } from '@microsoft/fast-element';
import { inject } from '@microsoft/fast-element/di';
import { NavigationPhase } from '@microsoft/fast-router';
import { CodeLabsService, Collection } from '../../services/code-labs.service';

/**
 * A Custom HTML Element.
 *
 * @public
 */
export class HomeScreen extends FASTElement {
  @inject(CodeLabsService) codeLabsService!: CodeLabsService;
  @observable collections!: Collection[];

  async enter(phase: NavigationPhase) {
    this.collections = await this.codeLabsService.getCollections();
  }
}
