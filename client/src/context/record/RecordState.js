import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
//import uuid from 'uuid';
import RecordContext from './recordContext';
import recordReducer from './recordReducer';
import {
    ADD_RECORD,
    DELETE_RECORD,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_RECORD,
    FILTER_RECORDS,
    CLEAR_FILTER,
} from '../types';

const RecordState = props => {
    const initialState = {
        records: [
            {
                id: 1,
                treatmentStatus: "Cured",
                disease: "Typhoid",
                symptoms: "Body soring, weakness, high fever and headache",
                cause: "eating street food",
                description: "",
                doctor: "Dr. niranjan",
                doctorPhone: "234567845",
                date: "2020-10-28T07:36:40.161Z",
            },
            {
                id: 2,
                treatmentStatus: "Ongoing",
                disease: "Flu",
                symptoms: "running nose and throat infection",
                cause: "ice cream",
                description: "I got it due to cold weather.",
                doctor: "Dr. C G Agarwal",
                doctorPhone: "2345678",
                date: "2020-10-28T07:34:24.000Z",
            },
            {
                id: 3,
                treatmentStatus: "cured",
                disease: "diabetes",
                symptoms: "restlessness and over thirstiness",
                cause: "n/a",
                description: "I got oit sice i was 30yr old and its a A type disbetes.",
                doctor: "Dr. C G Agarwal",
                doctorPhone: "2345678",
                date: "2020-10-28T07:32:45.444Z",
            }
        ],
        current : null,
        filtered: null
    };

    const [ state, dispatch ] = useReducer(recordReducer, initialState);

    //Add records
    const addRecord = (record) => {
        record.id = uuidv4();
        dispatch({ type: ADD_RECORD, payload: record });
    };

    //delete record
    const deleteRecord = (id) => {
        dispatch({ type: DELETE_RECORD, payload: id });
    };

    //set current record
    const setCurrent = (record) => {
        dispatch({ type: SET_CURRENT, payload: record });
    };

    //clear current record
    const clearCurrent = (record) => {
        dispatch({ type: CLEAR_CURRENT });
    };


    //update record
    const updateRecord = (record) => {
        dispatch({ type: UPDATE_RECORD, payload: record });
    };

    //filter record
    const filterRecords = (text) => {
        dispatch({ type: FILTER_RECORDS, payload: text });
    };

    // clear filter
    const clearFilter = (record) => {
        dispatch({ type: CLEAR_FILTER });
    };

    return (
        <RecordContext.Provider  
        value = {{
            records: state.records,
            current: state.current,
            filtered: state.filtered,  
            addRecord,
            deleteRecord,
            setCurrent,
            clearCurrent,
            updateRecord,
            filterRecords,
            clearFilter
        }}> 
                { props.children }
        </RecordContext.Provider>
    )
};

export default RecordState;
