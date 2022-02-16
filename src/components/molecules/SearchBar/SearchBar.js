import axios from 'axios';
import Input from 'components/atoms/Input/Input';
import React, { useState } from 'react';

import { SeachBarResults, SeachBarStyles, SearchBarContent, SearchBarStatus } from './SearchBar.styles';

const SearchBar = () => {
    const [searchResult, setSearchResult] = useState([]);
    const getSearchResult = async (e) => {
        const response = await axios.get(`/students/search/${e.target.value}`);
        setSearchResult(response.data.students);
    };

    return (
        <SeachBarStyles>
            <SearchBarStatus>
                <span>Logged as:</span>
                <span>Teacher</span>
            </SearchBarStatus>
            <SearchBarContent>
                <Input onInput={getSearchResult} placeholder="find student" />
                <SeachBarResults>
                    {searchResult.map((res) => (
                        <li key={res.id}>{res.name}</li>
                    ))}
                </SeachBarResults>
            </SearchBarContent>
        </SeachBarStyles>
    );
};

export default SearchBar;
