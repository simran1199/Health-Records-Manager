import React from 'react'
import PropTypes from 'prop-types';

const RecordItem = ({ record }) => {

    const { 
        id, 
        disease, 
        treatmentStatus, 
        symptoms, 
        cause, 
        description, 
        doctor, 
        doctorPhone,
        date } = record;

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
      <strong><i className="fas fa-diagnoses"></i> {disease.toUpperCase()}</strong>{' '} 
          <span style= {{float: 'right'}}
          className={'badge ' + ((treatmentStatus ==='Cured' || treatmentStatus ==='cured') ?
          'badge-success' : 'badge-primary')}>{treatmentStatus.charAt(0).toUpperCase() + treatmentStatus.slice(1)}</span>
      </h3>
      <ul className="list">
        {symptoms && (<li>
            <i className="fas fa-file-medical-alt"></i> {symptoms}
        </li>)}
        {cause && (<li>
            <i className="fas fa-bacteria"></i> {cause}
        </li>)}
        {description && (<li>
            <i className="fas fa-prescription-bottle-alt"></i> {description}
        </li>)}
        {doctor && (<li>
            <i className="fas fa-user-md"></i> {doctor}
        </li>)}
        {doctorPhone && (<li>
            <i className="fas fa-phone"></i> {doctorPhone}
        </li>)}
        {date && (<li>
            <i className="fas fa-calendar-alt"></i><strong> Record maintained on: </strong> {date}
        </li>)}
      </ul>
      <p>
          <button className="btn btn-dark btn-sm">Edit</button>
          <button className="btn btn-danger btn-sm">Delete</button>
      </p>
    </div>
  )
};

RecordItem.propTypes = {
record: PropTypes.object.isRequired
}

export default RecordItem
