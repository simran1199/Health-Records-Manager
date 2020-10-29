import React, { useState, useContext, useEffect } from 'react';
import RecordContext from '../../context/record/recordContext';

const RecordForm = () => {

  const recordContext = useContext(RecordContext);

  const { addRecord, current, clearCurrent, updateRecord } = recordContext;

  useEffect(() => {
    if(current !== null) {
      setRecord(current);
    } else {
      setRecord({
        treatmentStatus: "Cured",
        disease: "",
        symptoms: "",
        cause: "",
        description: "",
        doctor: "",
        doctorPhone: ""
      });
    }
  }, [recordContext, current])

    const [record, setRecord] = useState({
        treatmentStatus: "Cured",
                disease: "",
                symptoms: "",
                cause: "",
                description: "",
                doctor: "",
                doctorPhone: ""
    });

    const { treatmentStatus,
    disease,
    symptoms,
    cause,
    description,
    doctor,
    doctorPhone } = record;

    const onChange = e => setRecord({...record, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
      e.preventDefault();
      if(current === null) {
        addRecord(record);
      } else {
        updateRecord(record);
      }
      clearAll();
    }

    const clearAll = () => {
      clearCurrent();
    }

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? 'Edit Your Previous Records' : 'Add Your Medical Health Record'}
      </h2>
      <input 
        type="text"  
        placeholder="Disease Name" 
        name="disease"
        value={disease}
        onChange={onChange} />
        <input 
        type="text" 
        placeholder="Mention Major Symptoms" 
        name="symptoms"
        value={symptoms}
        onChange={onChange}/>
        <input 
        type="text" 
        placeholder="Mention the Cause (if aware of)" 
        name="cause"
        value={cause}
        onChange={onChange}/>
        <input 
        type="text" 
        placeholder='Description' 
        name="description"
        value={description}
        onChange={onChange}/>
        <input 
        type="text" 
        placeholder="Concerned Doctor's Name" 
        name="doctor"
        value={doctor}
        onChange={onChange}/>
        <input 
        type="text" 
        placeholder="Doctor's Contact Number" 
        name="doctorPhone"
        value={doctorPhone}
        onChange={onChange}/>
        <h4>Select the Treatment Status of Illness</h4>
        <input 
        type="radio" 
        name='treatmentStatus'
        value="Cured"
        checked={treatmentStatus==='Cured'}
        onChange={onChange}/> Cured{' '}
        <input 
        type="radio" 
        name="treatmentStatus"
        value="Ongoing"
        checked={treatmentStatus==='Ongoing'}
        onChange={onChange}/> Ongoing
        <div>
            <input 
              type= "submit" 
              value={current ? 'Update Record' : 'Add Record'} 
              className="btn btn-primary btn-block"/>
        </div>
        {current && <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
          </div>}
    </form>
  )
}

export default RecordForm
