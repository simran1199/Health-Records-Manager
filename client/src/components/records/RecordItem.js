import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import RecordContext from '../../context/record/recordContext';

const RecordItem = ({ record }) => {

    const recordContext = useContext(RecordContext);
    const { deleteRecord, setCurrent, clearCurrent } = recordContext;

    const { 
        _id, 
        disease, 
        treatmentStatus, 
        symptoms, 
        cause, 
        description, 
        doctor, 
        doctorPhone,
        date } = record;

        const onDelete = () => {
            deleteRecord(_id);
            clearCurrent();
        }

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
            <i className="fas fa-file-medical-alt"></i><strong> Symptoms: </strong> {symptoms}
        </li>)}
        {cause && (<li>
            <i className="fas fa-bacteria"></i><strong> Causes: </strong> {cause}
        </li>)}
        {description && (<li>
            <i className="fas fa-prescription-bottle-alt"></i><strong> Description/Report's Link: </strong> {description}
        </li>)}
        {doctor && (<li>
            <i className="fas fa-user-md"></i><strong> Doctor: </strong> {doctor}
        </li>)}
        {doctorPhone && (<li>
            <i className="fas fa-phone"></i><strong> Doctor's Contact: </strong> {doctorPhone}
        </li>)}
        {date && (<li>
            <i className="fas fa-calendar-alt"></i><strong> Record maintained on: </strong> {date}
        </li>)}
      </ul>
      <p>
          <button className="btn btn-dark btn-sm" onClick={() => setCurrent(record)}>Edit</button>
          <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
      </p>
    </div>
  )
};

RecordItem.propTypes = {
record: PropTypes.object.isRequired
}

export default RecordItem
