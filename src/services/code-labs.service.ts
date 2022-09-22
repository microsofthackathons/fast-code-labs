import { inject } from '@microsoft/fast-element/di';
import { Http } from '../utils';

export interface Collection {
  name: string;
  title: string;
  description: string;
  icon: string;
}

export class CodeLabsService {
  constructor(@inject(Http) private http: Http) {}

  async getCollections() {
    const response = await this.http.get<Collection[]>('collections');
    return response;
  }
}
