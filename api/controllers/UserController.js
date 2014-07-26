/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	test: function(req, res) {

		var util = require("util");
		var Client = require('telapi').client;

		var client = new Client(
		    'ACbb889084cb6836ed81a44f8b9e892f4b', 
		    '0e7a623dfe7e4a23be024d447ce19e8b'
		);

		var options = {
		    "From": "", // This should be a number setup through your TelAPI account
		    "To": "555196138661",
		    "Body": "SMS message sent from the TelAPI Node.JS helper!"
		};

		client.create("sms_messages", 
					  options, 
					  function (response) {
						util.log("SmsMessage SID: " +  response.sid);
						res.json(response);
					  }, 
					  function (error) {
						util.log("Error: " + error);
						res.json(error);
					  }
		); 
		//res.json(null);

	}

};

