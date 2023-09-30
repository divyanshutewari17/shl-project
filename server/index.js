const express = require('express');
require('./mongoose/connect')
const bodyParser = require('body-parser');
const projectRouter = require('./routers/project')
const data = require('./data.json')
const cors = require('cors')

const PORT = process.env.PORT || 5000


const app = express();

const Project = require('./schema/projectSchema')


app.use(cors())
app.use(bodyParser.json())
app.use(projectRouter)

app.get('/',async(req,res)=>{

    const addData = []
    data.forEach((e)=>{
        const project = {
            project: {
                title: e.Project.Title,
                technologies: e.Project.Technologies
            },
            technicalSkills: {
                frontend: e.Technical_Skillset.Frontend,
                backend: e.Technical_Skillset.Backend,
                databases: e.Technical_Skillset.Databases,
                infrastructure: e.Technical_Skillset.Infrastructre
            },
            otherInfo: {
                availability: e.Other_Information.Availability
            }
        }

        addData.push(project)

    })

    await Project.insertMany(addData)

    res.send('added')
})
app.listen(PORT,()=>{
    console.log("Listening to port: ",PORT)
})