import * as actionTypes from '../actions/actionTypes';

const initalState = {
    db: null,
    isDataAvailable: false,
    dataLoaded: false,
    errorMessage: null,
    showError: false
}

const reducer = (state = initalState,action) => {
    switch(action.type){
        case actionTypes.GET_DATA:
            return{
                ...state,
                db: action.payload,
                dataLoaded: true
            }
        case actionTypes.DATA_NOT_FETCHED:
            return{
                ...state,
                errorMessage: action.payload,
                showError: true,
            }
        default: return state
    }
}

export default reducer