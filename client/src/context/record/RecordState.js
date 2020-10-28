import React, { useReducer } from 'react';
import uuid from 'uuid';
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
        ]
    };

    const [ state, dispatch ] = useReducer(recordReducer, initialState);

    //Add records

    //delete record

    //set current record

    //clear current record

    //update record

    //filter record

    // clear filter

    return (
        <RecordContext.Provider  
        value = {{
            records: state.records

        }}> 
                { props.children }
        </RecordContext.Provider>
    )
};

export default RecordState;
