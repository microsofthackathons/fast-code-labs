import { ElementViewTemplate, html } from '@microsoft/fast-element';
import { CodeLabsCollectionCard } from './collection-card';

/**
 * The template for Card component.
 * @public
 */
const codeLabsCollectionCardTemplate = (): ElementViewTemplate<CodeLabsCollectionCard> =>
  html<CodeLabsCollectionCard>`
    <div class="card">
      <div class="image">
        <span class="icon icon-${x => x.icon}"></span>
      </div>
      <div class="content">
        <h3>${x => x.title}</h3>
        <p>${x => x.description}</p>
      </div>
      <div class="action">
        <a href="/code-labs/${x => x.name}" class="${x => (x.disabled ? 'disabled' : '')}">
          Get Started
          <span class="icon icon-action"></span>
        </a>
      </div>
    </div>
  `;

export const template = codeLabsCollectionCardTemplate();
