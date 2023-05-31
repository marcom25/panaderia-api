const database = require('mime-db');
const mysql = require('mysql');

module.exports.request = (query) => new Promise((res, rej) => {

    const connection = mysql.createConnection({
        host: 'sql10.freesqldatabase.com',
        port: 3306,
        user: 'sql10622812',
        password: 'KTj5afQSMF',
        database: 'sql10622812'
    });

    connection.query(query, (error, results, fields) => {
        if (error) rej(error);
 
        

        if(results.length <= 1) {
            res(results[0])
        } else {
            res(results)
        }

        connection.end((err) => {
            if (err) rej(err);

            res(results);
            console.log('query is finished');
        });

    });





});