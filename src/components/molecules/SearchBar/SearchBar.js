import Input from 'components/atoms/Input/Input';
import useStudents from 'hooks/useStudents';
import { debounce } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';

import { SeachBarResults, SeachBarStyles, SearchBarContent, SearchBarStatus } from './SearchBar.styles';

const SearchBar = () => {
    const [inputVal, setInputVal] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const { findStudents } = useStudents();

    const getSearchResult = useCallback(async () => {
        const { students } = await findStudents(inputVal);
        console.log(students);
        setSearchResult(students);
    }, [inputVal]);

    useEffect(() => {
        if (!inputVal) return;
        getSearchResult();
    }, [getSearchResult, inputVal]);

    return (
        <SeachBarStyles>
            <SearchBarStatus>
                <span>Logged as:</span>
                <span>Teacher</span>
            </SearchBarStatus>
            <SearchBarContent>
                <Input onChange={(e) => setInputVal(e.target.value)} value={inputVal} placeholder="find student" />
                {searchResult.length > 0 ? (
                    <SeachBarResults>
                        {searchResult.map((res) => (
                            <li key={res.id}>{res.name}</li>
                        ))}
                    </SeachBarResults>
                ) : null}
            </SearchBarContent>
        </SeachBarStyles>
    );
};

export default SearchBar;
