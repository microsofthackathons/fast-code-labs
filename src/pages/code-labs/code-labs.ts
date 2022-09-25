import { FASTElement, observable } from '@microsoft/fast-element';
import { inject } from '@microsoft/fast-element/di';
import { NavigationPhase } from '@microsoft/fast-router';
import { CodeLab, CodeLabsService, Collection } from '../../services/code-labs.service';
import { convertLabDateToDate } from '../../utils';

export class CodeLabsScreen extends FASTElement {
  @observable collectionName!: string;
  @inject(CodeLabsService) codeLabsService!: CodeLabsService;
  @observable collection!: Collection;
  @observable codeLabs!: CodeLab[];
  @observable currentSorterOrder!: string;

  async enter(phase: NavigationPhase) {
    const collections = await this.codeLabsService.getCollections();
    this.collection = collections.find(x => x.name === this.collectionName) ?? ({} as Collection);

    this.codeLabs = await this.codeLabsService.getCodeLabs(this.collectionName);
    this.setSorterOrder('alphabetical');
  }

  getActiveSortOrderClass(sortOrder: string) {
    return this.currentSorterOrder === sortOrder ? 'active' : '';
  }

  setSorterOrder(sortOrder: string) {
    this.currentSorterOrder = sortOrder;

    this.codeLabs.sort(this._sort(this.currentSorterOrder));
  }

  _sort(sortOrder: string) {
    const sortFunctions = {
      alphabetical: (a: CodeLab, b: CodeLab): number => {
        if (a.title === b.title) {
          return 0;
        }

        return a.title < b.title ? -1 : 1;
      },
      recent: (a: CodeLab, b: CodeLab): number => {
        const aDate = convertLabDateToDate(a.lastUpdated);
        const bDate = convertLabDateToDate(b.lastUpdated);

        if (aDate === bDate) {
          return 0;
        }

        return aDate > bDate ? 1 : -1;
      },
      duration: (a: CodeLab, b: CodeLab): number => {
        if (a.duration === b.duration) {
          return 0;
        }
        return a.duration < b.duration ? -1 : 1;
      },
    };

    return sortFunctions[sortOrder as keyof typeof sortFunctions];
  }
}
