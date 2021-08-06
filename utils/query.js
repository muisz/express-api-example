const db = require('../db');

const query = (sql, error, success) => {
    db.query(sql, (err, result) => {
        if(err) return error(err);
        return success(result);
    });
};

module.exports = query;