import {
  ElementViewTemplate,
  html,
  repeat,
  when,
} from '@microsoft/fast-element';
import { convertLabDateToLongString } from '../../utils';
import { CodeLabsLabCard } from './lab-card';

/**
 * The template for Card component.
 * @public
 *         <!-- <div class="lab-card-section">
          ${repeat(
          lab => lab.authors,
          html`<p class="lab-card-author">${author => author}</p>`
        )}
        </div> -->
 */
const codeLabsLabCardTemplate = (): ElementViewTemplate<CodeLabsLabCard> =>
  html<CodeLabsLabCard>`
    <template>
      <div class="lab-card-header">
        <h3>${lab => lab.title}</h3>
        <h4>
          By ${lab => lab.authors.join(', ').replace(/,(?=[^,]*$)/, ' &')}
        </h4>
      </div>
      <div class="lab-card-content">
        <div class="lab-card-section">
          <p class="lab-card-duration">
            <span class="icon icon-timer"></span>
            <span>${lab => lab.duration} min</span>
          </p>
          <p class="lab-card-date">
            <span class="icon icon-calendar"></span>
            <span>${lab => convertLabDateToLongString(lab.lastUpdated)}</span>
          </p>
        </div>
        <p class="lab-card-summary">${lab => lab.description}</p>
      </div>
      <div class="lab-card-section">
        <div class="lab-card-icons">
          ${when(
            lab => lab.categories?.length > 0,
            html`
              ${repeat(
                lab => lab.categories,
                html`<div
                  class="lab-card-icon lab-card-icon-${category =>
                    category.toLowerCase().replace(' ', '')}"
                  title="${category => category}"
                ></div>`
              )}
            `
          )}
        </div>
        <div class="lab-card-buttons">
          ${when(
            lab => lab.categories?.length === 0,
            html`
              <a href="${lab => lab.name}" class="button">
                Start
                <span class="icon icon-action"></span>
              </a>
            `
          )}
          ${when(
            lab => lab.categories?.length > 0,
            html`
              <a
                href="${lab => lab.name}"
                class="button button-${lab =>
                  lab.categories[0].toLowerCase().replace(' ', '')}"
              >
                Start
                <span class="icon icon-action"></span>
              </a>
            `
          )}
        </div>
      </div>
    </template>
  `;

export const template = codeLabsLabCardTemplate();
