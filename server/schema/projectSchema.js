const mongoose = require('mongoose')

const techSchema = new mongoose.Schema({
    frontend: {
        type:String,
    },
    backend: {
        type:String,
    },
    databases: {
        type:String,
    },
    infrastructure:{
        type:String,
    }
})

const infoSchema = new mongoose.Schema({
    availability: {
        type: String
    }
})

const project = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    technologies: {
        type: String
    },
})

const projectSchema = new mongoose.Schema({
    project: project,
    technicalSkills: techSchema,
    otherInfo: infoSchema
})

const Project=mongoose.model('projects',projectSchema)
module.exports = Project