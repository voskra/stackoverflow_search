import constants from './constants';
import api from './api';

export const setSearch = (search) => ({type:constants.SET_SEARCH_STRING,search});

export const fetchStart = () => ({type:constants.GET_LIST_REQUEST_START});

export const fetchSuccess = (payload) => ({type:constants.GET_LIST_REQUEST_COMPLETED,payload});

export const fetchError = (error) => ({type:constants.GET_LIST_REQUEST_ERROR,error});

export const fetchQuestions = (search) => {
    return dispatch => {
        dispatch(fetchStart());
        api.getQuestions({intitle:search})
            .then(data=>{
                if (data.error_id)
                    throw(data.error_name)
                else
                    dispatch(fetchSuccess({searchList:data}));
            })
            .catch(error=>dispatch(fetchError(error)));
    }
}
