const model = require ('../models/create.model');

async function createPerson(req, res){
    const {first_name} = req.body;
    const {last_name} = req.body;
    const {email} = req.body;
    const {gender} = req.body;
    const {country} = req.body;
    // console.log('This is the datas ', first_name, last_name, gender, country); 

    try {
        await model.createPerson(first_name, last_name, email, gender, country);
        res.status(200).send('Person created successfuly!');
    } catch (err) {
        res.status(500).send('There was an error creating a person');
    }
}

module.exports = {
    createPerson
}