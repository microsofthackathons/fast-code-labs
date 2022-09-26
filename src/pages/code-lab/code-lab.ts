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
  @observable oldStepNumber!: number;
  @observable duration!: number;
  @observable stepPages!: string[];

  async enter(phase: NavigationPhase) {
    const codeLabs = await this.codeLabsService.getCodeLabs(this.collectionName);

    this.codeLab = codeLabs.find(x => x.name === this.labName) ?? ({} as CodeLab);
    this.duration = this.codeLab.duration;

    this.codeLabSteps = await this.codeLabsService.getCodeLabSteps(this.collectionName, this.labName);

    const pagePromises: Promise<string>[] = [];
    this.codeLabSteps.forEach(step => {
      pagePromises.push(this.codeLabsService.getCodeLabStepContent(this.collectionName, this.labName, step.number));
    });

    this.stepPages = await Promise.all(pagePromises);

    (this.shadowRoot?.querySelectorAll('.lab-step') ?? []).forEach((stepNode, i) => {
      const div = document.createElement('div');
      div.innerHTML = this.stepPages[i];
      stepNode.appendChild(div);
    });
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
    this.oldStepNumber = this.currentStepNumber;
    this.currentStepNumber = stepNuber;

    this.duration = this.duration =
      this.codeLab.duration -
      this.codeLabSteps.filter(step => step.number < stepNuber).reduce((acc, curr) => curr.duration + acc, 0);
  }

  getStepAnimationClass(stepNumber: number) {
    if (stepNumber === this.currentStepNumber) {
      if (this.currentStepNumber > this.oldStepNumber) {
        return 'lab-step-from-right';
      }

      if (this.currentStepNumber < this.oldStepNumber) {
        return 'lab-step-from-left';
      }
    }

    if (stepNumber === this.oldStepNumber) {
      if (this.currentStepNumber > this.oldStepNumber) {
        return 'lab-step-to-left';
      }

      if (this.currentStepNumber < this.oldStepNumber) {
        return 'lab-step-to-right';
      }
    }

    return '';
  }

  loadStepPage(stepNumber: number) {
    const html = this.stepPages ? this.stepPages[stepNumber - 1] : '';

    return html;
  }
}
