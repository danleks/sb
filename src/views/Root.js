import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { UsersProvider } from 'providers/UsersProvider';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { Wrapper } from './Root.styles';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <MainTemplate>
                <Wrapper>
                    <UsersProvider>
                        <Routes>
                            <Route exact path="/" element={<Navigate to="/group" />} />
                            {/* <Route path="/add-user" element={<AddUser />} /> */}
                            <Route path="/group" element={<Dashboard />}>
                                <Route path=":id" />
                            </Route>
                        </Routes>
                    </UsersProvider>
                </Wrapper>
            </MainTemplate>
        </ThemeProvider>
    );
};

export default App;
