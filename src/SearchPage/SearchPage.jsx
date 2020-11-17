import React from 'react';
import './searchPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../action';
import { Link } from 'react-router-dom';

const SearchPage = () => {
    const search = useSelector(state => state.search);
    const dispatch = useDispatch();

    const onSearchChange = (e) => dispatch(setSearch(e.target.value));

    return (
        <div className="Search">
            <div className="Search__container">
                <input className="Search__container-input" value={search} onChange={onSearchChange}/>
                <Link className={`Search__container-link ${!search ? 'disabled' : ''}`}
                      disabled={!search} to={'/search-results'}>GO</Link>
            </div>
        </div>
    );
};

export default SearchPage;
