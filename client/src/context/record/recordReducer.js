import {
    ADD_RECORD,
    DELETE_RECORD,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_RECORD,
    FILTER_RECORDS,
    CLEAR_FILTER,
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case ADD_RECORD:
            return {
            ...state,
            records: [...state.records, action.payload]
            };
            
        case DELETE_RECORD:
            return {
                ...state,
                records: state.records.filter(record => record.id !== action.payload)
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
                    action.payload : record ) 
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

        default : return state;
    }
}