/**
 * @author tacowhisperer
 */

/**
 * Factory function for the Loader object which handles communication to and from storage.
 *
 * @param {Object} interface An Object that implements the read, write, and delete functionality of the Loader.
 * @returns {Loader} A loader object that interfaces with the current system to communicate to and from storage.
 */
export function loader(interface = {}) {
	return new Loader(interface);
}

/**
 * Loader object for communicating to and from storage. The read and write functionality can be implemented from a
 * separate location for additional functionality. All results are dealt with in a Promise.
 * 
 * @param {Object} interface An Object that implements the read and write functionality of the Loader.
 * @returns {Loader} An instance of a Loader object.
 */
function Loader(interface) {
	// Helper function for printing a simple error message for using unimplemented methods.
	function error(action) {
		throw new Error(`Attempted to ${action} a value with an unimplemented Loader method.`);
	}

	// Helper function that gets the key of an object, or returns false if not available. Works with primitives as well.
	function get(obj, key) {
		try {
			return Reflect.has(obj, key) ? obj[key] : false;
		} catch (e) {
			return false;
		}
	}

	const int = {read: get(interface, 'read'), write: get(interface, 'write'), delete: get(interface, 'delete')};

	/**
	 * Reads the given key from storage.
	 * 
	 * @param {Object} key The key to read from storage.
	 * @returns {Promise} A Promise of the result read from storage.
	 */
	this.read = async function(key) {
		return await (int.read ? int.read(key) : error('read'));
	};

	/**
	 * Writes the given value to the key provided to storage.
	 * 
	 * @param {Object} key The key to store map to in storage.
	 * @param {Object} value The value to store to the given key in storage.
	 * @returns {Promise} A Promise of the result written to storage.
	 */
	this.write = async function(key, value) {
		return await (int.write ? int.write(key, value) : error('write'));
	};

	/**
	 * Deletes the key-value pair mapped to the provided key from storage.
	 * 
	 * @param {Object} key The key whose key-value pair should be deleted from storage.
	 * @returns {Promise} A Promise of the result from the deletion operation.
	 */
	this.delete = async function(key) {
		return await (int.delete ? int.delete(key) : error('delete'));
	}
}
