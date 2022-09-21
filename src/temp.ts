export interface CodeLabStep {
    step: number;
    label: string;
    duration: number;
}

export interface CodeLab {
  id: string;
  title: string;
  category: string;
  readonly duraton: number;
  steps: CodeLabStep[];
  authors: string[];
  lastUpdated: string;
}
