import { css, ElementStyles } from '@microsoft/fast-element';

export const styles: ElementStyles = css`
  .lab-step pre,
  .lab-step code {
    font-family: 'Source Code Pro', Helvetica, Arial;
    font-size: inherit;
    border-radius: 3px;
    overflow-x: auto;
    // @apply (--google-codelab-step-code);
  }

  .lab-step code {
    color: #fafafa;
    background-color: rgba(255, 255, 255, 0.08);
    padding: 0.1em 0.3em;
  }

  .lab-step pre {
    display: block;
    color: white;
    background-color: #28323f;
    padding: 14px;
    -webkit-text-size-adjust: none;
    line-height: 1.4;
  }

  .lab-step pre > code {
    padding: 0;
    background-color: transparent;
  }

  .lab-step code em {
    color: #97c8f2;
  }

  .lab-step pre .str,
  .lab-step code .str {
    color: #65b042;
  } /* string  - green */
  .lab-step pre .kwd,
  .lab-step code .kwd {
    color: #e28964;
  } /* keyword - dark pink */
  .lab-step pre .com,
  .lab-step code .com {
    color: #aeaeae;
    font-style: italic;
  } /* comment - gray */
  .lab-step pre .typ,
  .lab-step code .typ {
    color: #89bdff;
  } /* type - light blue */
  .lab-step pre .lit,
  .lab-step code .lit {
    color: #3387cc;
  } /* literal - blue */
  .lab-step pre .pun,
  .lab-step code .pun {
    color: #fff;
  } /* punctuation - white */
  .lab-step pre .pln,
  .lab-step code .pln {
    color: #fff;
  } /* plaintext - white */
  .lab-step pre .tag,
  .lab-step code .tag {
    color: #89bdff;
  } /* html/xml tag    - light blue */
  .lab-step pre .atn,
  .lab-step code .atn {
    color: #bdb76b;
  } /* html/xml attribute name  - khaki */
  .lab-step pre .atv,
  .lab-step code .atv {
    color: #65b042;
  } /* html/xml attribute value - green */
  .lab-step pre .dec,
  .lab-step code .dec {
    color: #3387cc;
  } /* decimal - blue */
`;
