import { css, FASTElement, html, observable } from '@microsoft/fast-element';
import { designSystem } from '../../design-system';

class CodeLabsDashboard extends FASTElement {
  @observable collection!: string;
}

const template = html<CodeLabsDashboard>`
  <div>
    <h1 stlye="flex">
      All code labs in the '${x => x.collection.toUpperCase()}' collection
    </h1>
    <div style="display:block">
      <ul>
        <li>
          <a href="/code-labs/${x => x.collection}/about">
            0 - About Progressive Web Applications (Start Here)
          </a>
        </li>
        <li>
          <a href="/code-labs/${x => x.collection}/promises">
            0.1 - Promise API Basics
          </a>
        </li>
        <li>
          <a href="/code-labs/${x => x.collection}/fetch-api">
            0.2 - Fetch API Basics
          </a>
        </li>
        <li>
          <a href="/code-labs/${x => x.collection}/indexed-db">
            0.3 - IndexedDB Basics
          </a>
        </li>
        <li>
          <a href="/code-labs/${x => x.collection}/app-manifest">
            1 - Understanding the App Manifest
          </a>
        </li>
        <li>
          <a href="/code-labs/${x => x.collection}/service-workers">
            2 - Introduction to Service Workers
          </a>
        </li>
        <li>
          <a href="/code-labs/${x => x.collection}/workbox">
            3 - Service Worker Management with WorkBox
          </a>
        </li>
        <li>
          <a href="/code-labs/${x => x.collection}/service-workers-advanced">
            4 - Keeping your data synchronized with BackgroundSync API
          </a>
        </li>
        <li>
          <a href="/code-labs/${x => x.collection}/web-push">
            5 - Web Push Notifications
          </a>
        </li>
        <li>
          <a href="/code-labs/${x => x.collection}/beyond-pwas">
            6 - Beyond PWAs
          </a>
        </li>
      </ul>
    </div>
  </div>
`;

const styles = css`
  :host {
    contain: content;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    justify-content: center;
  }
`;

const definition = CodeLabsDashboard.compose({
  name: `${designSystem.prefix}-dashboard`,
  template,
  styles,
  shadowOptions: {
    mode: designSystem.shadowRootMode,
    delegatesFocus: true,
  },
});

definition.define(designSystem.registry);

export default CodeLabsDashboard;
