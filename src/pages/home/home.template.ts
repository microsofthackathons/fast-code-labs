import { ElementViewTemplate, html } from '@microsoft/fast-element';
import type { HomeScreen } from './home';

const appTemplate = (): ElementViewTemplate<HomeScreen> =>
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
                    <div class="card">
                        <div class="image small">
                            <span class="icon icon-pwa"></span>
                        </div>
                        <div class="content">
                            <h3>Progressive Web Applications</h3>
                            <p>Progressive Web Apps provide a user experience similar to native mobile apps.</p>
                        </div>
                        <div class="action">
                            <a href="/code-labs/pwa">
                                Get Started
                                <span class="icon icon-action"></span>
                            </a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image">
                            <span class="icon icon-custom-elements"></span>
                        </div>
                        <div class="content">
                            <h3>Web Components</h3>
                            <p>Web Components are custom elements that you can define and reuse in your Web apps.</p>
                        </div>
                        <div class="action">
                            <a href="/" class="disabled">
                                Get Started 
                                <span class="icon icon-action"></span>
                            </a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image">
                            <span class="icon icon-accesibility"></span>
                        </div>
                        <div class="content">
                            <h3>Accessibility</h3>
                            <p>Enabling as many people as possible to use Web sites, even when those people's abilities are limited in some way.</p>
                        </div>
                        <div class="action">
                            <a href="/" class="disabled">
                                Get Started
                                <span class="icon icon-action"></span>
                            </a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image">
                            <span class="icon icon-performance"></span>
                        </div>
                        <div class="content">
                            <h3>Performance</h3>
                            <p>Making content as available and interactive as possible, as soon as possible.</p>
                        </div>
                        <div class="action">
                            <a href="/" class="disabled">
                                Get Started
                                <span class="icon icon-action"></span>
                            </a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image">
                            <span class="icon icon-web"></span>
                        </div>
                        <div class="content">
                            <h3>Tutorials for Web developers</h3>
                            <p>Tutorials to take you step-by-step through learning HTML, CSS, JavaScript, and Web APIs.</p>
                        </div>
                        <div class="action">
                            <a href="/" class="disabled">
                                Get Started
                                <span class="icon icon-action"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <footer class="resources">
                © Microsoft ${new Date().getFullYear()}
            <footer>
        </div>
    </template>
`;

export const template = appTemplate();
