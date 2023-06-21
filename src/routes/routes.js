const express = require('express');
const router = express.Router();

const getMod = require('../models/get.model');
const getcontroller = require('../controllers/delete.controller');
const createController = require('../controllers/create.controller');
const updateController = require('../controllers/update.controller');


router.get('/fetchAll', async (req, res) => {
    try{
        const results = await getMod.fetchAllData();
        res.json(results);
    }catch(err){
        res.status(500).send('Error retrieving data from database');
    }
});

router.delete('/delete-person', getcontroller.deletePerson);
router.post('/create-person', createController.createPerson);
router.put('/update-person', updateController.updatePerson);

module.exports =  router;