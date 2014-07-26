
module.exports.models = {

  connection: process.env.ENV || 'development',

  attributes: {
  	_sid: {
  		type: 'string',
  		required:true,
  		unique: true
  	}
  }
};
