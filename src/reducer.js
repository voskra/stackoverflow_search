import constants from './constants';

const initialState = {
    search: '',
    loading: false,
    error: null
};

export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case constants.SET_SEARCH_STRING:
            return {...state, search: action.search};
        case constants.GET_LIST_REQUEST_START:
            return {...state, loading: true};
        case constants.GET_LIST_REQUEST_COMPLETED:
            return {...state, loading: false, ...action.payload};
        case constants.GET_LIST_REQUEST_ERROR:
            return {...state, loading: false, error: action.error};
        default:
            return state;
    }
};
