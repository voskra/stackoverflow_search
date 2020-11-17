import React from 'react';
import { useSelector } from 'react-redux';

const App = ({children}) => {
    const loading = useSelector(state => state.loading);
    return (
        <>
            {loading && <div className="Loading">Loading ...</div>}
            {children}
        </>
    );
};

export default App;
