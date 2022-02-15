import Input from 'components/atoms/Input/Input';
import React from 'react';

import { SeachBarStyles, SearchBarStatus } from './SearchBar.styles';

const SearchBar = () => {
    return (
        <SeachBarStyles>
            <SearchBarStatus>
                <span>Logged as:</span>
                <span>Teacher</span>
            </SearchBarStatus>
            <Input placeholder="find student" />
        </SeachBarStyles>
    );
};

export default SearchBar;
