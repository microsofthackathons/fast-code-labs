import { attr, FASTElement } from '@microsoft/fast-element';

export class CodeLabsCollectionCard extends FASTElement {
  @attr name!: string;
  @attr icon!: string;
  @attr title!: string;
  @attr description!: string;
  @attr({ mode: 'boolean' }) disabled: boolean = false;
}
