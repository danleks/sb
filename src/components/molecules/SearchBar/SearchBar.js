import Input from 'components/atoms/Input/Input';
import { useCombobox } from 'downshift';
import useStudents from 'hooks/useStudents';
import { debounce } from 'lodash';
import React, { useState } from 'react';

import { ResultItem, SeachBarResults, SeachBarStyles, SearchBarContent, SearchBarStatus } from './SearchBar.styles';

const SearchBar = () => {
    const [searchResult, setSearchResult] = useState([]);
    const { findStudents } = useStudents();

    const getSearchResult = async ({ inputValue }) => {
        const { students } = await findStudents(inputValue);
        setSearchResult(students);
    };

    const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
        items: searchResult,
        onInputValueChange: getSearchResult,
    });

    return (
        <SeachBarStyles>
            <SearchBarStatus>
                <span>Logged as:</span>
                <span>Teacher</span>
            </SearchBarStatus>
            <SearchBarContent {...getComboboxProps()}>
                <Input {...getInputProps()} placeholder="find student" />
                <SeachBarResults {...getMenuProps()}>
                    {isOpen &&
                        searchResult.map((item, index) => (
                            <ResultItem isHighlighted={highlightedIndex === index} {...getItemProps({ item, index })} key={index}>
                                {item.name}
                            </ResultItem>
                        ))}
                </SeachBarResults>
            </SearchBarContent>
        </SeachBarStyles>
    );
};

export default SearchBar;
