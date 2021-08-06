const query = require('../../utils/query');
const { make_password } = require('../../utils/hash');
const uuid = require('uuid');

const saveUser = async (data) => {
    if(
        data.username && data.password && data.email
    ){
        let encrypted = await make_password(data.password);
        let sql = `
            INSERT INTO user (username, password, email, user_id) 
            VALUES ('${data.username}', '${encrypted}', '${data.email}', '${uuid.v4()}');`;
        query(
            sql, 
            err => {
                console.log({ err });
                throw err;
            }, 
            response => console.log({ response })
        );
        return { status: true };
    };
    return { status: false, message: "invalid data" }
};

const getUsers = () => {
    try{
        return new Promise((resolve, reject) => {
            query(`SELECT id, username, email, user_id FROM user`, err => reject(err), response => resolve(response));
        });
    } catch (err){
        console.log({ err });
        throw err;
    }
};

const login = async (username, password) => {
    try{
        let hashed = await make_password(password);
        return new Promise((resolve, reject) => {
            query(`SELECT id, username, email, user_id FROM user WHERE username = '${username}' AND password = '${hashed}'`, err => reject(err), response => resolve(response));
        });
    } catch (err){
        console.log({ err });
        throw err;
    }
}

module.exports = { saveUser, getUsers, login };