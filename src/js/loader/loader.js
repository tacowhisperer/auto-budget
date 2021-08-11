/**
 * @author tacowhisperer
 */

/**
 * Factory function for the Loader object which handles communication to and from storage.
 *
 * @param {Object} interface An Object that implements the read and write functionality of the Loader.
 * @returns {Loader} A loader object that interfaces with the current system to communicate to and from storage.
 */
export function loader(interface = {}) {
	return new Loader(interface);
}

/**
 * Loader object for communicating to and from storage. The read and write functionality can be implemented from a
 * separate location for additional functionality.
 * 
 * @param {Object} interface An Object that implements the read and write functionality of the Loader.
 * @returns {Loader} An instance of a Loader object.
 */
function Loader(interface) {
	const int = interface;

	this.read = function(key) {
		return int.read ? int.read(key) : this;
	};

	this.write = function(key, value) {
		return int.write ? int.write(key, value) : this;
	};
}
