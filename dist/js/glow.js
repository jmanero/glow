'use strict';

$(document).ready(function() {
  console.log('Starting Glow');

  function $element(query) {
    const elements = $(query);
    if (elements.length === 0) throw ReferenceError(`No elements matching query '${query}' were found!`);

    return $(elements[0]);
  }

  /*
  * Set up nav-header events
   */
  (function() {
    const header = $element('#navigation-header');
    const menu = $element('#navigation-menu');

    header.on('click', () => menu.toggle());
  })();

  (function() {
    const header = $element('#channel-header');
    const menu = $element('#channel-menu');

    header.on('click', () => menu.toggle());
  })();
});
