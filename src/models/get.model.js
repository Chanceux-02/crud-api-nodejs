const con = require('../database/db');

async function fetchAllData() { //use async to define the asynchronous function
    const query = `SELECT * FROM person_mock_data`;
    try{
        const results = await con(query); // use await to pause until the promise is resolved or rejected
        return results; // returning the results

    }catch(err){
        console.log('There was an error or check your database');
        return[];
    }
}

module.exports = {
    fetchAllData
}