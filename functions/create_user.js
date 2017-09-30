const admin = require('firebase-admin');

module.exports = function (req, res) {
    if (!req.body.phone) {return res.status(422).send({ error: 'Invalid Phone Number' })}

    const phone = String(req.body.phone).replace(/[^\d]/g, '');
    admin.auth().createUser({ uid: phone })
        .then(user => res.send(user))
        .catch(err => res.status(422).send({ error: `Oooops! Something went wrong... \r\n ${err}` }))
}