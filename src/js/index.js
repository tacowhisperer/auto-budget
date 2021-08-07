/**
 * @author tacowhisperer
 */

import * as ajaxpromiseModule from './ajax/ajaxpromise.js';

/**
 * Main initializer for the auto-budget project.
 * 
 * @param {Element} docBody The HTML element that will hold the main content built by the app.
 */
export function init(docBody, chartModule) {
    console.log(docBody);
    console.log(chartModule);
    
    // ajaxpromiseModule.getRequestPromise('fancybg.html').then(html => docBody.innerHTML = html).catch(err => {
    //     docBody.innerHTML = '<h1>Hello, world!</h1>';
    //     console.error(e);
    // });
}