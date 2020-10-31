import {
    GET_RECORDS,
    ADD_RECORD,
    DELETE_RECORD,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_RECORD,
    FILTER_RECORDS,
    CLEAR_FILTER,
    RECORD_ERROR,
    CLEAR_RECORDS,
} from '../types';

export default (state, action) => {
    switch(action.type) {

        case GET_RECORDS:
            return {
                ...state,
                records: action.payload,
                loading: false
            }

        case ADD_RECORD:
            return {
            ...state,
            records: [...state.records, action.payload],
            loading: false
            };
            
        case DELETE_RECORD:
            return {
                ...state,
                records: state.records.filter(record => record.id !== action.payload),
                loading: false
            }

        case CLEAR_RECORDS:
            return {
                ...state,
                records: null,
                filtered: null,
                error: null,
                current: null
            }

        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }

        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }

        case UPDATE_RECORD:
                return {
                    ...state,
                    records: state.records.map(record => record.id === action.payload.id ? 
                    action.payload : record ),
                    loading: false 
                }
        
        case FILTER_RECORDS:
            return {
                ...state,
                filtered: state.records.filter(record => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return record.disease.match(regex) || record.symptoms.match(regex);
                })
            }

        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            }

        case RECORD_ERROR:
            return {
                ...state,
                error: action.payload
            };

        default : return state;
    }
}