const model = require ('../models/delete.model');

async function deletePerson(req, res){
    const id = req.body.id;
    console.log('This is the id',id); 

    try {
        await model.deletePerson(id);
        res.status(200).send('Deleted successfuly!');
    } catch (err) {
        res.status(500).send('There was an erro deleting a person');
    }
}

module.exports = {
    deletePerson
}