import axios from "axios";
import { useState, useEffect } from "react";
import Sidebar from '../components/Sidebar';
import { useDebouncedCallback } from "use-debounce";

const Project = () =>{

    const [projects, setProjects] = useState([]);
    const [showProjects, setShowProjects] = useState([]);
    const [search, setSearch] = useState("");
    const [advanceSearch, setAdvanceSearch] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [load, setLoad] = useState(false);

    const [modalData, setModalData] = useState({
        project:{
            title: "",
            technologies: ""
        },
        technicalSkills:{
            frontend: "",
            backend: "",
            infrastructure: "",
            databases: ""
        },
        otherInfo:{
            availability:""
        }
        
    })

    const handleExit = () => {
        setShowModal(false)
    }

    const handleChange = (data) => {
        setShowModal(true);
        setModalData(data);
    }

    useEffect(()=>{
        async function setup(){
            try{
                const data= await axios.get('http://localhost:5000/all-projects');
                setProjects(data.data)
                setShowProjects(data.data)
                setLoad(true);
            }catch(e){
                alert( e.message ? e.message : e)
            }
        }
        if(!load){
            setup();
        } else{
            debounced()
        }
    },[search])

    const debounced = useDebouncedCallback(async()=>{
        try{
            const searchData = showProjects.filter(m => m.project.title.toLowerCase().includes(search.toLowerCase()) || m.project.technologies.toLowerCase().includes(search.toLowerCase()));
            setProjects(searchData);
        }catch(e){
            alert( e.message ? e.message : e)
        }
    }, 1000)

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Project Manager - SHL</a>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value = {search} onChange={(e)=>setSearch(e.target.value)}/>
                </form>
            </div>
        </nav>


        <div className="container">
        
            <div className="row">
            {
                projects.map((project) =>
                <div className="col-md-4 col-lg-3 col-sm-12 px-1 py-2">
                    <div className="card project-grid" onClick={()=>handleChange(project)}>
                        <div className="card-body">
                            <h5 className="card-title">{project.project.title}</h5>
                            <br/>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Project Technologies</h6>
                            <p className="card-text no-wrap">{project.project.technologies}</p>

                            <br/>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Technical Skills - Frontend</h6>
                            <p className="card-text no-wrap">{project.technicalSkills.frontend === '' ? "_____":project.technicalSkills.frontend}</p>

                            <br/>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Technical Skills - Backend</h6>
                            <p className="card-text no-wrap">{project.technicalSkills.backend === '' ? "_____":project.technicalSkills.backend}</p>

                            <br/>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Technical Skills - Databases</h6>
                            <p className="card-text no-wrap">{project.technicalSkills.databases === '' ? "_____": project.technicalSkills.databases}</p>

                            <br/>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Technical Skills - Infrastructure</h6>
                            <p className="card-text no-wrap">{project.technicalSkills.infrastructure === '' ? "_____": project.technicalSkills.infrastructure}</p>

                        </div>
                    </div>  
                </div>
            )}
            </div>
        
        </div>
        <Sidebar showModal = {showModal} handleExit={handleExit} modalData={modalData}/>
        </>
    )
}

export default Project;