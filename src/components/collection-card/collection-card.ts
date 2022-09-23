import { attr, FASTElement } from '@microsoft/fast-element';

/**
 * A class derived from the FASTCard foundation component
 */
export class CodeLabsCollectionCard extends FASTElement {
  @attr name!: string;
  @attr icon!: string;
  @attr title!: string;
  @attr description!: string;
}
