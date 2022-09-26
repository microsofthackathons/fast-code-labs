import { inject } from '@microsoft/fast-element/di';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import '../../node_modules/code-prettify/src/prettify.js';
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

const encodeHTMLEntities_ = (htmlStr: string) =>
  htmlStr.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

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

  async getCodeLabStepContent(collectionName: string, labName: string, stepNumber: number): Promise<string> {
    const response = await fetch(`/api/collections/${collectionName}/${labName}/steps/${stepNumber}.html`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/html',
      },
    });

    const stepContent = await response.text();
    const parser = new DOMParser();
    const html = parser.parseFromString(stepContent, 'text/html');

    const blocks = html.querySelectorAll('pre > code');

    blocks.forEach(block => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      block.innerHTML = PR.prettyPrintOne(encodeHTMLEntities_(block.textContent));
    });
    // console.log(html.body.innerHTML);

    return html.body.innerHTML;
  }
}
