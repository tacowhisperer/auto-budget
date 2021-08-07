/**
 * @author tacowhisperer
 */

import * as ajaxpromiseModule from './ajax/ajaxpromise.js';

console.log('hello world!');

/**
 * Main initializer for the auto-budget project.
 * 
 * @param {Element} docBody The HTML element that will hold the main content built by the app.
 */
function init(docBody) {
	docBody.innerHTML = `<p>${JSON.stringify(ajaxpromiseModule).replace(/\n/g, '<br>')}</p>`;
}