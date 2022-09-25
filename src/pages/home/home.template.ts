import { ElementViewTemplate, html, repeat } from '@microsoft/fast-element';
import { Collection } from '../../services/code-labs.service';
import type { HomeScreen } from './home';
import '../../components';

const homeTemplate = (): ElementViewTemplate<HomeScreen> =>
  html<HomeScreen>`
    <template>
        <div>
            <header>
                <h1>
                    <span>Welcome to </span>
                    <span>
                        <span class="icon icon-brand"></span>
                        <span class="icon icon-brand-fast"></span>
                    </span>
                    <span> code labs</span>
                </h1>
                <p>
                    This is a collection of guided, hands-on coding experience tutorials. Most codelabs will step you through the process of building consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </header>

            <main>
                <h2>Code labs collections</h2>
                <div class="card-container">
                    ${repeat(
                      x => x.collections,
                      html<Collection>`
                        <fast-codelabs-collection-card
                          name="${x => x.name}"
                          icon="${x => x.icon}"
                          title="${x => x.title}"
                          description="${x => x.description}"
                          ?disabled=${x=>!x.active}
                        ></fast-codelabs-collection-card>
                      `
                    )}
                </div>
            </main>
            <footer class="resources">
                © Microsoft ${new Date().getFullYear()}
            <footer>
        </div>
    </template>
`;

export const template = homeTemplate();
