const con = require('../database/db');

async function updatePerson(fname, lname, email, gender, country, id) { //use async to define the asynchronous function
    const query = "UPDATE person_mock_data SET first_name = ?, last_name = ?, email = ?, gender = ?, country = ? WHERE id = ?"; //using a placeholder to make it more secure
    try{
         await con(query, [fname, lname, email, gender, country, id]); // use await to pause until the promise is resolved or rejected
    }catch(err){
        console.log('There was an error in model: ',err);
        res.status(500).send('There was an error in model ', err);
        // return err;
    }
}

module.exports = {
    updatePerson
}