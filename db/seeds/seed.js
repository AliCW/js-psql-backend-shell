const format = require('pg-format');
const db = require('../connection');

const seed = async ({ testData }) => {

    await db.query(`DROP TABLE IF EXISTS test_table`)

    const testTablePromise = db.query(`
        CREATE TABLE test_table (
            example VARCHAR NOT NULL
    );`);

    await testTablePromise

    const insertIntoTestTable = format(
        `INSERT INTO test_table (example) VALUES %L RETURNING *;`,
        testData.map(({ example }) => [example])
    );

    const insertIntoTestTablePromise = db
        .query(insertIntoTestTable)
        .then((result) => result.rows);

    await insertIntoTestTablePromise;

};

module.exports = seed;