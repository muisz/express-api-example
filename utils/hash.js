const crypto = require('crypto');

const key = "04aeb370d8155f6c563cee0d47836f";

const encrypt = (text) => {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(text, key, 100000, 64, 'sha512', (err, derivedKey) => {
            if(err) reject(err);
            resolve(derivedKey.toString('hex'));
        });
    });
}

const make_password = async password => {
    return encrypt(password).then(hashed => `hash_1058${hashed}`).catch(err => err);
}

module.exports = { make_password };