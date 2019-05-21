/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	"address": "localhost",
	"port": 8080,
	"ipWhitelist": ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
	"language": "en",
	"timeFormat": 24,
	"units": "metric",
	"modules": [{
		"module": "helloworld",
		"position": "middle_center",
		"config": {
			"text": "Hello world!"
		}
	}]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
