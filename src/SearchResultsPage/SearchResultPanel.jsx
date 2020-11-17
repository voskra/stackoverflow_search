import React, { useEffect, useState } from 'react';
import Table from '../Components/Table';

const SearchResultPanel = ({data, onClose}) => {

    const [list, setList] = useState([]);

    useEffect(() => {
        if (data)
            data.api(data.id)
                .then(result => setList(result.items))
                .catch(error => console.error(error));
    }, [data]);

    console.log(list);

    return (
        <div className={`SearchInfo ${!!data ? 'opened' : ''}`}>
            <label className="SearchInfo__button" onClick={onClose}>+</label>
            <Table data={list} columns={[]}/>
        </div>
    );
};

export default SearchResultPanel;
