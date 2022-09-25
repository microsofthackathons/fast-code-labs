import { inject } from '@microsoft/fast-element/di';
import { Http } from '../utils';

export interface Collection {
  name: string;
  title: string;
  description: string;
  icon: string;
  active: boolean;
}

export interface CodeLab {
  name: string;
  title: string;
  description: string;
  authors: string[];
  categories: string[];
  lastUpdated: string;
  duration: number;
}

export interface CodeLabStep {
  number: number;
  title: string;
  duration: number;
}

export class CodeLabsService {
  constructor(@inject(Http) private http: Http) {}

  async getCollections(): Promise<Collection[]> {
    const response = await this.http.get<Collection[]>('collections/metadata');
    return response;
  }

  async getCodeLabs(collectionName: string): Promise<CodeLab[]> {
    const response = await this.http.get<CodeLab[]>(`collections/${collectionName}/metadata`);
    return response;
  }

  async getCodeLabSteps(collectionName: string, labName: string): Promise<CodeLabStep[]> {
    const response = await this.http.get<CodeLabStep[]>(`collections/${collectionName}/${labName}/metadata`);
    return response;
  }
}
