const twilio = require('twilio');
//  break out into sepetrate folder and gitignore it... (production)
const accountSid = require('./credentials.js').accountSid
const authToken = require('./credentials.js').authToken

module.exports = new twilio.Twilio(accountSid, authToken)