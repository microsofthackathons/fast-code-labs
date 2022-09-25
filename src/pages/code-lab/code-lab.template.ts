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
      <div class="step-content">
        <h2>${page => page.getStepTitle(page.currentStepNumber)}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Eros in cursus turpis massa tincidunt. Orci eu lobortis elementum nibh tellus molestie nunc non
          blandit. Egestas tellus rutrum tellus pellentesque eu. Tincidunt vitae semper quis lectus nulla at volutpat.
          Augue neque gravida in fermentum et sollicitudin ac. Praesent elementum facilisis leo vel fringilla est
          ullamcorper eget. Ac felis donec et odio pellentesque diam volutpat commodo sed. Amet consectetur adipiscing
          elit duis tristique sollicitudin. Odio aenean sed adipiscing diam donec. Odio morbi quis commodo odio aenean
          sed. Ultrices vitae auctor eu augue ut lectus. Euismod elementum nisi quis eleifend quam adipiscing vitae
          proin. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Pellentesque sit amet porttitor eget dolor
          morbi non arcu risus. Nisl rhoncus mattis rhoncus urna neque viverra. Egestas egestas fringilla phasellus
          faucibus. At quis risus sed vulputate odio ut. Id porta nibh venenatis cras sed felis eget velit.
        </p>
        <p>
          A diam maecenas sed enim ut sem viverra aliquet eget. Vel eros donec ac odio tempor orci dapibus. Augue eget
          arcu dictum varius duis at consectetur. Nec feugiat in fermentum posuere urna nec tincidunt. Arcu non odio
          euismod lacinia at quis risus. Vel eros donec ac odio tempor. Purus semper eget duis at tellus at urna
          condimentum. Lectus vestibulum mattis ullamcorper velit. Malesuada bibendum arcu vitae elementum curabitur
          vitae. Commodo elit at imperdiet dui accumsan. Nunc sed augue lacus viverra vitae congue eu consequat. Massa
          tincidunt nunc pulvinar sapien et ligula ullamcorper. Dui nunc mattis enim ut tellus elementum sagittis vitae
          et. Diam phasellus vestibulum lorem sed. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Sed
          risus ultricies tristique nulla aliquet enim tortor at. Penatibus et magnis dis parturient montes nascetur
          ridiculus. A diam maecenas sed enim ut sem viverra. Pellentesque id nibh tortor id aliquet lectus proin.
        </p>
        <p>
          Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Venenatis cras sed felis eget velit aliquet.
          Laoreet sit amet cursus sit amet dictum sit amet. Et malesuada fames ac turpis egestas. Eget mi proin sed
          libero enim sed faucibus turpis in. Nullam ac tortor vitae purus. Maecenas sed enim ut sem viverra aliquet
          eget sit amet. Nisl rhoncus mattis rhoncus urna. Lacus laoreet non curabitur gravida arcu. Egestas integer
          eget aliquet nibh. Id faucibus nisl tincidunt eget. Fermentum leo vel orci porta non pulvinar neque laoreet.
        </p>
        <p>
          Duis ut diam quam nulla porttitor massa. Pellentesque habitant morbi tristique senectus et. Dapibus ultrices
          in iaculis nunc sed augue lacus. Malesuada fames ac turpis egestas maecenas pharetra convallis. Ultricies leo
          integer malesuada nunc vel risus. Sit amet consectetur adipiscing elit pellentesque habitant. Volutpat
          consequat mauris nunc congue. Arcu cursus euismod quis viverra nibh. Odio ut sem nulla pharetra diam sit amet.
          In nulla posuere sollicitudin aliquam ultrices. Felis eget velit aliquet sagittis id consectetur purus. Sapien
          faucibus et molestie ac.
        </p>
        <p>
          Integer enim neque volutpat ac tincidunt. Amet dictum sit amet justo donec enim. Pulvinar elementum integer
          enim neque volutpat. Aliquam malesuada bibendum arcu vitae. Tincidunt arcu non sodales neque sodales.
          Dignissim convallis aenean et tortor. Interdum velit laoreet id donec ultrices tincidunt arcu. Amet volutpat
          consequat mauris nunc congue. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Orci nulla
          pellentesque dignissim enim sit amet venenatis urna cursus. Amet aliquam id diam maecenas ultricies. Nisi
          vitae suscipit tellus mauris a diam maecenas.
        </p>
        <p>
          Varius duis at consectetur lorem donec. Ut morbi tincidunt augue interdum velit euismod in. Mauris
          pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Ut tristique et egestas quis ipsum
          suspendisse ultrices gravida. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. In ornare quam
          viverra orci sagittis eu volutpat odio facilisis. Enim eu turpis egestas pretium aenean. Adipiscing commodo
          elit at imperdiet dui accumsan sit amet nulla. Eget nulla facilisi etiam dignissim diam quis enim lobortis.
          Urna neque viverra justo nec ultrices dui.
        </p>
        <p>
          Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Egestas congue quisque egestas diam in arcu
          cursus. Ipsum suspendisse ultrices gravida dictum fusce ut. In hac habitasse platea dictumst vestibulum.
          Cursus metus aliquam eleifend mi in nulla posuere. Egestas sed tempus urna et pharetra pharetra massa.
          Ultrices tincidunt arcu non sodales neque sodales ut. In cursus turpis massa tincidunt dui ut ornare. Id
          ornare arcu odio ut sem nulla. Nullam vehicula ipsum a arcu cursus vitae congue. Luctus accumsan tortor
          posuere ac ut consequat. Amet tellus cras adipiscing enim. Ultricies mi quis hendrerit dolor magna.
        </p>
        <p>
          At quis risus sed vulputate odio ut. Massa id neque aliquam vestibulum morbi blandit. Massa tincidunt dui ut
          ornare lectus sit amet est. Massa id neque aliquam vestibulum. Amet facilisis magna etiam tempor orci eu
          lobortis elementum nibh. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. In nisl
          nisi scelerisque eu ultrices vitae auctor eu. Interdum posuere lorem ipsum dolor sit amet consectetur
          adipiscing elit. Volutpat sed cras ornare arcu dui vivamus arcu felis. Facilisi morbi tempus iaculis urna id
          volutpat lacus. Placerat in egestas erat imperdiet sed. Enim diam vulputate ut pharetra sit amet aliquam.
        </p>
        <p>
          Et molestie ac feugiat sed lectus. Integer malesuada nunc vel risus commodo viverra maecenas. Non enim
          praesent elementum facilisis leo vel fringilla. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam.
          Sodales neque sodales ut etiam sit amet nisl purus. Tortor aliquam nulla facilisi cras fermentum odio eu. Sit
          amet nulla facilisi morbi tempus iaculis. Convallis tellus id interdum velit. Urna porttitor rhoncus dolor
          purus non enim praesent. Integer quis auctor elit sed. Viverra tellus in hac habitasse platea dictumst. Est
          pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Eget gravida cum sociis natoque penatibus et
          magnis dis parturient. Id nibh tortor id aliquet lectus proin. Risus pretium quam vulputate dignissim
          suspendisse in est ante in. Orci porta non pulvinar neque laoreet. Ut placerat orci nulla pellentesque
          dignissim enim sit amet. Imperdiet dui accumsan sit amet nulla.
        </p>
        <p>
          Vel risus commodo viverra maecenas accumsan lacus. Sit amet consectetur adipiscing elit pellentesque habitant
          morbi tristique senectus. Id nibh tortor id aliquet lectus proin. Ut faucibus pulvinar elementum integer enim
          neque volutpat ac. Commodo quis imperdiet massa tincidunt nunc. Ac turpis egestas maecenas pharetra. Porttitor
          lacus luctus accumsan tortor posuere ac. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.
          Viverra orci sagittis eu volutpat odio facilisis mauris sit. Praesent tristique magna sit amet purus. Ipsum
          faucibus vitae aliquet nec ullamcorper sit. Varius sit amet mattis vulputate enim nulla aliquet porttitor.
          Euismod quis viverra nibh cras pulvinar mattis nunc. Nibh praesent tristique magna sit amet. Quis enim
          lobortis scelerisque fermentum dui faucibus in ornare.
        </p>
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
    </footer>
  `;

export const template = codeLabTemplate();
