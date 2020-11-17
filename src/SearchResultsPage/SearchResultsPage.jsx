import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './searchResultsPage.css';
import Table from '../Components/Table';
import { fetchQuestions } from '../action';
import SearchResultPanel from './SearchResultPanel';
import api from '../api';

const SearchResultsPage = React.memo(() => {
    const [page, setPage] = useState(1);
    const [currentItem, setCurrentItem] = useState(null);
    const prevSearch = useRef('');
    const searchList = useSelector(state => state.searchList);
    const error = useSelector(state => state.error);
    const search = useSelector(state => state.search);
    const dispatch = useDispatch();

    const COLUMNS = [
        {
            label: 'Автор',
            renderValue: item => (
                <button className="SearchLink"
                        onClick={() => setCurrentItem({id: item.owner.user_id, api: api.getUserAnswers})}>
                    {item.owner.display_name}
                </button>
            )
        },
        {label: 'Тема', name: 'title'},
        {label: 'Кол-во ответов', name: 'answer_count'},
        {
            label: 'Теги',
            renderValue: item => item.tags.map(tag => (
                <button className="SearchLink"
                        onClick={() => setCurrentItem({id: tag, api: api.getTagAnswers})}>
                    {tag}
                </button>
            ))
        }
    ];

    useEffect(() => {
        if (prevSearch.current !== search) {
            prevSearch.current = search;
            dispatch(fetchQuestions(search));
        }
    }, [search]);

    console.log(search, prevSearch);
    return (
        <div>
            <Table data={searchList?.items} columns={COLUMNS}/>
            <SearchResultPanel data={currentItem} onClose={() => setCurrentItem(null)}/>
            {error &&
            <div className="Search__error">
                {error}
            </div>}
        </div>
    );
});

export default SearchResultsPage;
