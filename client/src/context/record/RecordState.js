import React, { useReducer } from 'react';
//import { v4 as uuidv4 } from 'uuid';
//import uuid from 'uuid';
import axios from 'axios';
import RecordContext from './recordContext';
import recordReducer from './recordReducer';
import {
    GET_RECORDS,
    ADD_RECORD,
    DELETE_RECORD,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_RECORD,
    FILTER_RECORDS,
    CLEAR_FILTER,
    CLEAR_RECORDS,
    RECORD_ERROR
} from '../types';

const RecordState = props => {
    const initialState = {
        records: null,
        current : null,
        filtered: null,
        error: null
    };

    const [ state, dispatch ] = useReducer(recordReducer, initialState);


    //GET CONTACTS
    const getRecords = async () => {
        try {
            const res = await axios.get('/api/records');

            dispatch({ type: GET_RECORDS, payload: res.data });
        } catch (err) {
            dispatch({ type: RECORD_ERROR, payload: err.response.msg });
        }
    };




    //Add records
    const addRecord = async (record) => {
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/records', record, config);

            dispatch({ type: ADD_RECORD, payload: res.data });
        } catch (err) {
            dispatch({ type: RECORD_ERROR, payload: err.response.msg });
        }
    };

    //delete record
    const deleteRecord = (id) => {
        dispatch({ type: DELETE_RECORD, payload: id });
    };

    //clear records
    const clearRecords = (record) => {
        dispatch({ type: CLEAR_RECORDS });
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
            error: state.error,  
            addRecord,
            deleteRecord,
            setCurrent,
            clearCurrent,
            updateRecord,
            filterRecords,
            clearFilter,
            getRecords,
            clearRecords
        }}> 
                { props.children }
        </RecordContext.Provider>
    )
};

export default RecordState;
