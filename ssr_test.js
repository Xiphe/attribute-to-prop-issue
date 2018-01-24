'use strict';

const path = require('path');
const { Renderer, loadConfig } = require('@stencil/core/server');
const assert = require('assert');

const config = loadConfig(path.resolve(__dirname));
const renderer = new Renderer(config);

renderer
  .hydrate({
    html: `
    <my-button size="big">Hello Button</my-button>
`,
  })
  .then(results => {
    assert(
      results.html.match(/size-big/g),
      `Does not contain "size-big":\n\n${results.html}\n`
    );
    console.log('Everything works as expected.');
  })
  .catch(e => {
    console.error(e);
  });
