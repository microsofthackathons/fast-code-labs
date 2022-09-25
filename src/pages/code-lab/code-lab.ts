import { FASTElement, observable } from '@microsoft/fast-element';
import { inject } from '@microsoft/fast-element/di';
import { NavigationPhase } from '@microsoft/fast-router';
import { CodeLab, CodeLabsService, CodeLabStep } from '../../services/code-labs.service';

export class CodeLabScreen extends FASTElement {
  @observable collectionName!: string;
  @observable labName!: string;
  @inject(CodeLabsService) codeLabsService!: CodeLabsService;
  @observable codeLab!: CodeLab;
  @observable codeLabSteps!: CodeLabStep[];
  @observable currentStepNumber: number = 1;
  @observable duration!: number;

  async enter(phase: NavigationPhase) {
    const codeLabs = await this.codeLabsService.getCodeLabs(this.collectionName);

    this.codeLab = codeLabs.find(x => x.name === this.labName) ?? ({} as CodeLab);
    this.duration = this.codeLab.duration;

    this.codeLabSteps = await this.codeLabsService.getCodeLabSteps(this.collectionName, this.labName);
  }

  getStepStatusClass(stepNuber: number): string {
    if (stepNuber < this.currentStepNumber) {
      return 'completed';
    }

    if (stepNuber === this.currentStepNumber) {
      return 'selected';
    }

    return '';
  }

  setCurrentStep(stepNuber: number) {
    this.currentStepNumber = stepNuber;

    this.duration = this.duration =
      this.codeLab.duration -
      this.codeLabSteps.filter(step => step.number < stepNuber).reduce((acc, curr) => curr.duration + acc, 0);
  }

  getStepTitle(stepNumber: number) {
    const currentStep = this.codeLabSteps?.find(step => step.number === stepNumber);

    return `${currentStep?.number}. ${currentStep?.title}`;
  }
}
