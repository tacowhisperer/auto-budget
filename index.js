/**
 * @author tacowhisperer
 */

import * as ajaxpromiseModule from './src/js/ajax/ajaxpromise.js';

/**
 * Main initializer for the auto-budget project.
 * 
 * @param {Element} viewElem The HTML element that will hold the main content built by the app.
 */
export function init(viewElem, chartModule) {
    console.log(viewElem);
    console.log(chartModule);
    
    // ajaxpromiseModule.getRequestPromise('fancybg.html').then(html => viewElem.innerHTML = html).catch(err => {
    //     viewElem.innerHTML = '<h1>Hello, world!</h1>';
    //     console.error(e);
    // });
}