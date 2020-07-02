const content = `
  <style>
    :host {
      background: hsl(0, 0%, 4%);
      box-sizing: border-box;
      color: hsl(0, 0%, 98%);
      display: block;
      font-family: sans-serif;
      font-size: 16px;
      line-height: 1.5;
      padding: 32px;
      width: 100%;
    }

    .names {
      font-size: 18px;
      margin-bottom: 12px;
    }

    .links {
      color: hsl(0, 0%, 71%);
    }

    p {
      margin: 0;
    }

    .red {
      color: hsl(14, 100%, 53%);
    }

    a {
      color: hsl(0, 0%, 86%);
    }

    a:focus,
    a:hover {
      color: hsl(0, 0%, 98%);
      text-decoration: underline;
    }
  </style>

  <p class="names">
    <strong>I stand in solidarity</strong> with
    <a href="https://4wardeveruk.org/cases/youth-cases-uk/police-restraint/clinton-mccurbin/" target="_blank" rel="noreferrer">Clinton McCurbin</a>,
    <a href="https://www.independent.co.uk/news/uk/police-rule-out-action-over-arrest-death-1536141.html" target="_blank" rel="noreferrer">Oliver Pryce</a>,
    <a href="https://en.wikipedia.org/wiki/Death_of_Joy_Gardner" target="_blank" rel="noreferrer">Joy Gardner</a>,
    <a href="https://en.wikipedia.org/wiki/Murder_of_Stephen_Lawrence" target="_blank" rel="noreferrer">Stephen Lawrence</a>,
    <a href="http://inquest.gn.apc.org/pdf/Shiji%20Lapite%20report.pdf" target="_blank" rel="noreferrer">Shiji Lapite</a>,
    <a href="http://inquest.gn.apc.org/pdf/Ibrahima%20Sey%20report.pdf" target="_blank" rel="noreferrer">Ibrahima Sey</a>,
    <a href="https://en.wikipedia.org/wiki/Death_of_Christopher_Alder" target="_blank" rel="noreferrer">Christopher Alder</a>,
    <a href="https://en.wikipedia.org/wiki/Death_of_Sean_Rigg" target="_blank" rel="noreferrer">Sean Rigg</a>,
    <a href="https://www.bbc.co.uk/news/uk-england-beds-bucks-herts-32987783" target="_blank" rel="noreferrer">Habib 'Papa' Ullah</a>,
    <a href="https://en.wikipedia.org/wiki/Controversies_surrounding_G4S#Unlawful_killing_of_Jimmy_Mubenga" target="_blank" rel="noreferrer">Jimmy Mubenga</a>,
    <a href="https://en.wikipedia.org/wiki/Death_of_Mark_Duggan" target="_blank" rel="noreferrer">Mark Duggan</a>,
    <a href="https://www.bbc.co.uk/news/uk-england-london-52650110" target="_blank" rel="noreferrer">Belly Mujinga</a>,
    and <a href="https://www.inquest.org.uk/deaths-in-police-custody" target="_blank" rel="noreferrer">thousands</a> of <a href="http://www.irr.org.uk/news/black-deaths-in-custody/" target="_blank" rel="noreferrer">others</a> who have been victims of <span class="red">racism</span> and <span class="red">police brutality</span>.
  </p>

  <p><strong><a href="https://blacklivesmatters.carrd.co/" target="_blank" rel="noreferrer">Go here to find out how <em>you</em> can help.</a></strong></p>

  <p><small><a href="https://github.com/kidwellj/i-stand" target="_blank" rel="noreferrer">Embed this on your site.</a></small></p>
`;

class BlackLives extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = content;
  }
}

customElements.define("black-lives", BlackLives);
