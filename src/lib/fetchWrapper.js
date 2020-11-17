const API_URL = 'https://api.stackexchange.com/2.2/';

const getFullUrl = (url) => {
    if (!url) return '';
    return API_URL + url;
};

const DEFAULT_OPTIONS = {
    HEADERS: {'Content-Type': 'application/json'},
    METHOD: 'GET',
    FORMAT: 'JSON'
};

export default ({url, options = {}, params = {}}) => {
    let wrappedUrl = new URL(getFullUrl(url));
    if (!wrappedUrl || !wrappedUrl.searchParams)
        wrappedUrl.searchParams = new URLSearchParams();
    for (let key in params) {
        if (params[key] instanceof Array)
            params[key].forEach(p => wrappedUrl.searchParams.append(key, p));
        else if (!!params[key])
            wrappedUrl.searchParams.append(key, params[key]);
    }
    return fetch(wrappedUrl, {...DEFAULT_OPTIONS, ...options})
        .then(response => {
            try {
                return response.json();
            } catch (error) {
                throw (error);
            }
        })
        .then(response => {
            if (response.error)
                throw (response.error);
            return response;
        });
}
