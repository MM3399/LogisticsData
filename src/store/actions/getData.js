import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';


export const getData = (data) => {
    return{
        type: actionTypes.GET_DATA,
        payload: data
    }
}



export const failedToFetchData = (data) => {
    return{
        type: actionTypes.DATA_NOT_FETCHED,
        payload:data
    }
}
 
export const getDataFromServer = () => {
    return dispatch => {
        axios.get('/')
        .then(res=> {
            dispatch(getData(res.data))
                }
            )
        .catch(err => dispatch(failedToFetchData(err)))
    } 

}