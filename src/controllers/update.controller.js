const model = require ('../models/update.model');

async function updatePerson(req, res){
    const {first_name} = req.body;
    const {last_name} = req.body;
    const {email} = req.body;
    const {gender} = req.body;
    const {country} = req.body;
    const {id} = req.body;
    // console.log('This is the datas ', first_name, last_name, gender, country); 

    try {
        await model.updatePerson(first_name, last_name, email, gender, country, id);
        res.status(200).send('Person updated successfuly!');
    } catch (err) {
        res.status(500).send('There was an error updating a person');
    }
}

module.exports = {
    updatePerson
}