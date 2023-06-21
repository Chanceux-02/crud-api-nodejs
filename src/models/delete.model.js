const con = require('../database/db');

async function deletePerson(id) { //use async to define the asynchronous function
    const query = `DELETE FROM person_mock_data WHERE id = ?`; //using a placeholder to make it more secure
    try{
         await con(query, [id]); // use await to pause until the promise is resolved or rejected
    }catch(err){
        console.log('There was an error fo deleting: ',err);
        res.status(500).send('There was an error deleting a person ', err);
        // return err;
    }
}

module.exports = {
    deletePerson
}