const functions = require('firebase-functions');
const admin = require('firebase-admin');
const creatUser = require('./create_user');
const serviceAccount = require('./serviceAccount.json');
const requestOneTimePassword = require('./request_one_time_password')
const verifyOneTimePassword = require('./verify_one_time_password')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://appreciately-7e591.firebaseio.com"
});

exports.creatUser = functions.https.onRequest(creatUser);
exports.requestOneTimePassword = functions.https.onRequest(requestOneTimePassword)
exports.verifyOneTimePassword = functions.https.onRequest(verifyOneTimePassword)