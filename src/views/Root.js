import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import Form from 'components/organisms/Form/Form';
import Navigation from 'components/organisms/Navigation/Navigation';
import UsersList from 'components/organisms/UsersList/UsersList';
import { users as usersData } from 'data/users';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import { ThemeProvider } from 'styled-components';

import { Wrapper } from './Root.styles';

const mockAPI = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usersData) {
                resolve(usersData);
            } else {
                reject(new Error('No users'));
            }
        }, 500);
    });
};

const INIT_FORM_VALUES = {
    name: '',
    attendance: '',
    average: '',
};

const App = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoadingState] = useState(false);
    const [formValues, setFormValues] = useState(INIT_FORM_VALUES);
    const deleteUser = (name) => {
        const filteredUsers = users.filter((user) => name !== user.name);
        setUsers(filteredUsers);
    };
    useEffect(() => {
        setLoadingState(true);
        mockAPI().then((res) => {
            setLoadingState(false);
            setUsers(res);
        });
    }, []);

    const handleFormValueChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleUserAdd = (e) => {
        e.preventDefault();
        let newUser = {
            name: formValues.name,
            attendance: formValues.attendance,
            average: formValues.average,
        };
        setUsers([newUser, ...users]);
        setFormValues(INIT_FORM_VALUES);
    };
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Wrapper>
                <Navigation />
                <Routes>
                    <Route
                        path="/add-user"
                        element={<Form handleUserAdd={handleUserAdd} formValues={formValues} handleFormValueChange={handleFormValueChange} />}
                    ></Route>
                    <Route path="/" element={<UsersList isLoading={isLoading} users={users} deleteUser={deleteUser} />}></Route>
                </Routes>
            </Wrapper>
        </ThemeProvider>
    );
};

export default App;
