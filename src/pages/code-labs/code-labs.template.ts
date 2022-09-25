import { ElementViewTemplate, html, repeat, when } from '@microsoft/fast-element';
import { CodeLab } from '../../services/code-labs.service';
import CodeLabScreen from '../code-lab';
import type { CodeLabsScreen } from './code-labs';
import '../../components';

// @attr name!: string;
// @attr title!: string;
// @attr description!: string;
// @attr authors!: string[];
// @attr categories!: string[];
// @attr lastUpdated!: string;
// @attr duration!: number;

const codeLabTemplate = html<CodeLab, CodeLabScreen>`
  <fast-codelabs-lab-card
    name="${(codeLab, ctx) => `./${ctx.parent.collectionName}/${codeLab.name}`}"
    title="${codeLab => codeLab.title}"
    description="${codeLab => codeLab.description}"
    authors="${codeLab => codeLab.authors}"
    categories="${codeLab => codeLab.categories}"
    lastUpdated="${codeLab => codeLab.lastUpdated}"
    duration="${codeLab => codeLab.duration}"
  ></fast-codelabs-lab-card>
`;

const codeLabsTemplate = (): ElementViewTemplate<CodeLabsScreen> => {
  return html<CodeLabsScreen>`
      <template>
        <header>
            <h1>
                <span>${page => page.collection?.title} code labs</span>
            </h1>
            <p>
                ${page =>
                  page.collection
                    ?.description} Most codelabs will step you through the process of building consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </header>

        <main>
            <div class="lab-card-sort-group">
              <div
                class="lab-card-sort ${page => page.getActiveSortOrderClass('alphabetical')}"
                @click=${page => page.setSorterOrder('alphabetical')}
              >A-Z</div>
              <div
                class="lab-card-sort ${page => page.getActiveSortOrderClass('recent')}" 
                @click=${page => page.setSorterOrder('recent')}
              >RECENT</div>
              <div
                class="lab-card-sort ${page => page.getActiveSortOrderClass('duration')}" 
                @click=${page => page.setSorterOrder('duration')}
              >DURATION</div>
            </div>
            <div class="lab-card-group">
              ${when(page => page.codeLabs?.length === 0, html`<p>This looks empty</p>`)}
              ${when(
                page => page.codeLabs?.length > 0,
                html` ${repeat(page => page.codeLabs, html<CodeLab, CodeLabScreen>`${codeLabTemplate}`)} `
              )}
            </div>
        </main>
        <footer class="resources">
            © Microsoft ${new Date().getFullYear()}
        <footer>
    </template>
  `;
};

export const template = codeLabsTemplate();
