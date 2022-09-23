import {
  ElementViewTemplate,
  html,
  repeat,
  when,
} from '@microsoft/fast-element';
import { CodeLab } from '../../services/code-labs.service';
import CodeLabScreen from '../code-lab';
import type { CodeLabsScreen } from './code-labs';

const codeLabTemplate = html<CodeLab, CodeLabScreen>`
  <a
    href="/code-labs/${(_, ctx) => ctx.parent.collectionName}/${codeLab =>
      codeLab.name}"
    >${codeLab => codeLab.title}</a
  >
`;

const codeLabsTemplate = (): ElementViewTemplate<CodeLabsScreen> => {
  return html<CodeLabsScreen>`
    <div>
      <h1 stlye="flex">${page => page.collection?.title} code labs</h1>
      <p>${page => page.collection?.description}</p>
      <div style="display:block">
        <ul>
          ${repeat(
            page => page.codeLabs,
            html<CodeLab, CodeLabScreen>`<li>${codeLabTemplate}</li>`
          )}
        </ul>
      </div>
    </div>
  `;
};

export const template = codeLabsTemplate();
