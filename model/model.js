const db = require('../db/connection');

const demo = () => {
    return db.query(`
        SELECT * FROM demo_table
        ;`)
        .then(({ rows }) => {
            if(rows.length === 0){
                return Promise.reject({
                    msg: '404 - Not found',
                })
            };
            return rows;            
        });
};

module.exports = {
    demo
};