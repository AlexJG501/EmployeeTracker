var figlet = require('figlet');
var mysql = require('mysql2');
const employee = require('./lib/employee/employeeOptions');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Hinds!ght73137',
    database: 'emptrck'
});

connection.connect((err) => {
    if (err) throw err;
    figlet('Employee Manager', {
            width: 80,
            whitespaceBreak: true
    },function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
        viewAllEmployees(connection)
    });
});