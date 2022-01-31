import { users as usersData } from 'data/users';
import React, { useEffect, useState } from 'react';

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

export const UsersContext = React.createContext({
    deleteUset: () => {},
    handleUserAdd: () => {},
    isLoading: false,
    users: [],
});

export const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoadingState] = useState(false);
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
    const handleUserAdd = (formValues) => {
        console.log(formValues);
        let newUser = {
            name: formValues.name,
            attendance: formValues.attendance,
            average: formValues.average,
        };
        setUsers([newUser, ...users]);
    };
    return (
        <UsersContext.Provider
            value={{
                deleteUser,
                handleUserAdd,
                users,
                isLoading,
            }}
        >
            {children}
        </UsersContext.Provider>
    );
};
