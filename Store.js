/**
 * The Store object saves and loads data to and from localStorage.
 *
 * This is a very simple wrapper around the localStorage API.
 *
 * All data is stored as JSON strings.
 */
var Store = function () {
    // check for localStorage availability
    if ('localStorage' in window && window['localStorage'] !== null) {
        return {
            /**
             * Set a key to a value
             * @param {string} Key to write
             * @param {any} Value to store
             */
            set: function (key, value) {
                var json = JSON.stringify(value);
                window.localStorage.setItem(key, json);
            },
            /**
             * Get the value for a key.
             * @param  {string} key Key to read
             * @param  {mixed} def Default value to return in case the key is not set
             * @return {mixed}
             */
            get: function (key, def) {
                var value = window.localStorage.getItem(key);
                
                if (null !== typeof value) {
                    return JSON.parse(value);
                }

                return def;
            },
            exists: function (key) {
                return null !== window.localStorage.getItem(key);
            },
            unset: function (key) {
                window.localStorage.setItem(key, null);
            }
        }
    }

    return false;
};
