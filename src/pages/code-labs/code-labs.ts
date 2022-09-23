import { FASTElement, observable } from '@microsoft/fast-element';
import { inject } from '@microsoft/fast-element/di';
import { NavigationPhase } from '@microsoft/fast-router';
import {
  CodeLab,
  CodeLabsService,
  Collection,
} from '../../services/code-labs.service';

export class CodeLabsScreen extends FASTElement {
  @observable collectionName!: string;
  @inject(CodeLabsService) codeLabsService!: CodeLabsService;
  @observable collection!: Collection;
  @observable codeLabs!: CodeLab[];

  async enter(phase: NavigationPhase) {
    const collections = await this.codeLabsService.getCollections();
    this.collection =
      collections.find(x => x.name === this.collectionName) ??
      ({} as Collection);

    this.codeLabs = await this.codeLabsService.getCodeLabs(this.collectionName);
  }
}
