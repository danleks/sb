import SearchBar from 'components/molecules/SearchBar/SearchBar';
import Navigation from 'components/organisms/Navigation/Navigation';
import React from 'react';

import News from '../News/News';
import { Wrapper } from './MainTemplate.styles';

const MainTemplate = ({ children }) => {
    return (
        <Wrapper>
            <Navigation />
            <SearchBar />
            {children}
            <News />
        </Wrapper>
    );
};

export default MainTemplate;
