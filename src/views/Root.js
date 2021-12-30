import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import UsersList from 'components/organisms/UsersList/UsersList';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Wrapper } from './Root.styles';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Wrapper>
                <UsersList />
            </Wrapper>
        </ThemeProvider>
    );
};

export default App;
