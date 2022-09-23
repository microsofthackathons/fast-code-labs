import { inject } from '@microsoft/fast-element/di';
import { Http } from '../utils';

export interface Collection {
  name: string;
  title: string;
  description: string;
  icon: string;
}

export interface CodeLab {
  name: string;
  title: string;
  desription: string;
  authors: string[];
  lastUpdate: string;
  duration: number;
}

export class CodeLabsService {
  constructor(@inject(Http) private http: Http) {}

  async getCollections(): Promise<Collection[]> {
    const response = await this.http.get<Collection[]>('collections');
    return response;
  }

  async getCodeLabs(collectionName: string): Promise<CodeLab[]> {
    const response = await this.http.get<CodeLab[]>(
      `collection/${collectionName}`
    );
    return response;
  }
}
