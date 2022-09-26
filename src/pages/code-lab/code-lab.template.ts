import { ElementViewTemplate, html, repeat, when } from '@microsoft/fast-element';
import { CodeLabStep } from '../../services/code-labs.service';
import { CodeLabScreen } from './code-lab';

/*
    <h1>
      ${x => x.labName} lab inside the
      <a href="/code-labs/${x => x.collectionName}">'${x => x.collectionName.toUpperCase()}'</a>
      collection
    </h1>

    <fast-codelabs-codelab>
      <fast-codelabs-lab-step></fast-codelabs-lab-step>
    </fast-codelabs-codelab>

    collections.json
    collections/
      pwa/
        pwa.json
        about/
          about.json
          steps/
        promises/
          promises.json
          steps/

*/

const codeLabTemplate = (): ElementViewTemplate<CodeLabScreen> =>
  html<CodeLabScreen>`
    <header class="lab-category-${page => page.codeLab?.categories[0].toLowerCase().replace(' ', '')}">
      <div class="lab-nav-back">
        <a href="/code-labs/${page => page.collectionName}" title="Navigate back to collection"
          ><span class="icon icon-back"></span
        ></a>
      </div>
      <h3>${page => page.codeLab?.title}</h3>
      <div class="lab-duration" title="Time remaining">
        <span class="icon icon-timer"></span>
        <span class="duration">${page => page.duration} min</span>
      </div>
    </header>
    <aside>
      <ul class="lab-toc">
        ${repeat(
          page => page.codeLabSteps,
          html<CodeLabStep, CodeLabScreen>`
            <li
              class="lab-toc-item ${(step, ctx) => ctx.parent.getStepStatusClass(step.number)}"
              @click="${(step, ctx) => ctx.parent.setCurrentStep(step.number)}"
            >
              <i>${step => step.number}</i>
              <span>${step => step.title}</span>
            </li>
          `
        )}
      </ul>
    </aside>
    <main>
      <div class="lab-content">
        <!-- <div class="lab-step-container"> -->
          ${repeat(
            page => page.codeLabSteps,
            html<CodeLabStep, CodeLabScreen>`
              <div
                class="lab-step ${(step, ctx) =>
                  step.number === ctx.parent.currentStepNumber ? 'lab-step-selected' : ''} ${(step, ctx) =>
                  ctx.parent.getStepAnimationClass(step.number)}"
              >
                <h2>${step => step.number}. ${step => step.title}</h2>
                <!-- <div :innerHTML=></div>
                ${(step, ctx) => ctx.parent.loadStepPage(step.number)} -->
              </div>
            `
          )}
        <!-- </div> -->
      </div>
    </main>
    <footer>
      <div class="step-nav-container">
        <div
          class="step-nav ${page => (page.currentStepNumber === 1 ? 'step-nav-invisible' : '')}"
          title="Previous step"
          @click=${page => page.setCurrentStep(page.currentStepNumber - 1)}
        >
          <span class="icon icon-left"></span>
        </div>
        ${when(
          page => page.currentStepNumber === page.codeLabSteps?.length,
          html`<div class="step-nav step-nav-complete" title="Complete codelab">
            <a href="/code-labs/${page => page.collectionName}">
              <span class="icon icon-complete"></span>
            </a>
          </div> `
        )}
        ${when(
          page => page.currentStepNumber < page.codeLabSteps?.length,
          html`<div
            class="step-nav"
            title="${page => (page.currentStepNumber === 1 ? 'Start codelab' : 'Next Step')}"
            @click=${page => page.setCurrentStep(page.currentStepNumber + 1)}
          >
            <span class="icon icon-right"></span>
          </div>`
        )}
      </div>
      </div>
    </footer>
  `;

export const template = codeLabTemplate();
