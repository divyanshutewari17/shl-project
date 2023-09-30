import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

export default function Sidebar(props) {

  return (
    <>
      <MDBModal
        animationDirection='right'
        show={props.showModal}
        tabIndex='-1'
        closeOnEsc = {true}
      >
        <MDBModalDialog position='top-right' side>
          <MDBModalContent>
            <MDBModalHeader className='bg-dark text-white'>
              <MDBModalTitle>{props.modalData.project.title}</MDBModalTitle>
              <MDBBtn
                color='none'
                className='btn-close btn-close-white'
                onClick={props.handleExit}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className='row'>
                <h6 className="card-subtitle mb-2 text-body-secondary">Project Technologies</h6>
                <p className="card-text">{props.modalData.project.technologies}</p>

                <br/>
                <h6 className="card-subtitle mb-2 text-body-secondary">Technical Skills - Frontend</h6>
                <p className="card-text">{props.modalData.technicalSkills.frontend === '' ? "_____": props.modalData.technicalSkills.frontend}</p>

                <br/>
                <h6 className="card-subtitle mb-2 text-body-secondary">Technical Skills - Backend</h6>
                <p className="card-text">{props.modalData.technicalSkills.backend === '' ? "_____": props.modalData.technicalSkills.backend}</p>

                <br/>
                <h6 className="card-subtitle mb-2 text-body-secondary">Technical Skills - Databases</h6>
                <p className="card-text">{props.modalData.technicalSkills.databases === '' ? "_____": props.modalData.technicalSkills.databases}</p>

                <br/>
                <h6 className="card-subtitle mb-2 text-body-secondary">Technical Skills - Infrastructure</h6>
                <p className="card-text">{props.modalData.technicalSkills.infrastructure === '' ? "_____": props.modalData.technicalSkills.infrastructure}</p>

                <br/>
                <h6 className="card-subtitle mb-2 text-body-secondary">Availability</h6>
                <p className="card-text">{props.modalData.otherInfo.availability === '' ? "_____": props.modalData.otherInfo.availability}</p>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn outline color='dark' onClick={props.handleExit}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}