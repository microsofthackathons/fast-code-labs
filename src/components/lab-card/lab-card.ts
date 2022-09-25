import { attr, FASTElement, ValueConverter } from '@microsoft/fast-element';

const arrayConverter: ValueConverter = {
  toView(value: string[]): string {
    // conert array of strngs to string
    return value.join(',');
  },

  fromView(value: string): string[] {
    // convert strings to array of strings
    return value ? value.split(',') : [];
  },
};

export class CodeLabsLabCard extends FASTElement {
  @attr name!: string;
  @attr title!: string;
  @attr description!: string;
  @attr({ converter: arrayConverter }) authors!: string[];
  @attr({ converter: arrayConverter }) categories!: string[];
  @attr lastUpdated!: string;
  @attr duration!: number;
}
