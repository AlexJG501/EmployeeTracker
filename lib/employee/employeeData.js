const utils = require('../utils');

getAllEmployees = (connection) => {

};

getAllManagers = (connection) => {

};

getEmployeesByKwarg = (connection, kwargs) => {

};

insertNewEmployee = (connection, newEmployee) => {
    return new Promise(
        function(resolve, reject) {
            newEmployee.first_name = toTitleCase(newEmployee.first_name);
            newEmployee.last_name = toTitleCase(newEmployee.last_name);
        
            connection.query(
                `INSERT INTO employee SET ?`,
                newEmployee,  // object with keys first_name, last_name, role_id, manager_id
                function(err, res) {

                    // catch errors that are likely due to user input
                    if (err && err.errno === 1062) {
                        console.log("\nThat employee already exists! Let's try again.\n")
                        resolve(res);
                    } // catch errors that are not related to user input
                    else if (err) {
                        console.log(`Couldn't load the employees. Error: ${err.sqlMessage}.`)
                        return reject(err);
                    } // or send them back to the main menu
                    else {
                        console.log(`\nEmployee added!`);
                        resolve(res);
                    }
                }
            );
        }
    );
};