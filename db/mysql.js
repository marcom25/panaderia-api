

const database = require('mime-db');
const mysql = require('mysql');

module.exports.request = (query) => new Promise((res, rej) => {

    const connection = mysql.createConnection({
        host: 'db4free.net',
        port: 3306,
        user: 'proyectopan123',
        password: 'Pan12345',
        database: 'proyectopan123'
    });

    connection.query(query, (error, results, fields) => {
        if (error) rej(error);
 
        console.log('results', results); 

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