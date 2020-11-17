import fetchWrapper from './lib/fetchWrapper';

export default {
    getQuestions: params => fetchWrapper({
        url: 'search',
        params: {
            order: 'desc',
            sort: 'activity',
            site: 'stackoverflow',
            page: 1,
            pagesize: 20,
            ...params
        }
    }),
    getUserAnswers: (id, params) => fetchWrapper({
        url: `users/${id}/answers`,
        params: {
            order: 'desc',
            sort: 'activity',
            site: 'stackoverflow',
            page: 1,
            pagesize: 20,
            ...params
        }
    }),
    getTagAnswers: (id, params) => fetchWrapper({
        url: `tags/${id}/top-answerers/all_time`,
        params: {
            order: 'desc',
            sort: 'activity',
            site: 'stackoverflow',
            page: 1,
            pagesize: 20,
            ...params
        }
    }),
};
