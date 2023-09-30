const express = require('express')
const router = new express.Router()

const Project = require('../schema/projectSchema')
//login route
router.get('/all-projects', async(req, res) => {
    try{
        const project = await Project.find({});
        res.status(200).send(project);
    } catch(e){
        res.send("Unable to load data");
    }
    
})

module.exports = router  