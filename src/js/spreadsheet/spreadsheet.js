/**
 * @author tacowhisperer
 */

/**
 * Factory function for the SpreadSheet object which handles communication to and from some external spreadsheet API.
 *
 * @param {Object} interface An Object that implements the read and write functionality of the Loader.
 * @returns {SpreadSheet} A spreadsheet object that interfaces with some external spreadsheet API.
 */
export function spreadsheet(interface = {}) {
    return new SpreadSheet(interface);
}

/**
 * SpreadSheet object for communicating to and from some external spreadsheet API. All results are dealt with in a
 * Promise.
 * 
 * @param {Object} interface An Object that implements the spreadsheet methods that will be used by other modules in the
 *                           app.
 * @returns {SpreadSheet} An instance of a SpreadSheet object.
 */
function SpreadSheet(interface) {
}
