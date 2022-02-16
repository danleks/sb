import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { UsersContext } from 'providers/UsersProvider';
import React, { useContext } from 'react';

import { ListStyles, StudentsWrapper } from './UsersList.styles';

const UsersList = ({ students = [] }) => {
    const { isLoading } = useContext(UsersContext);
    return (
        <>
            <StudentsWrapper>
                <h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
                <ListStyles>
                    {students.map((user) => {
                        return <UsersListItem key={user.name} user={user} />;
                    })}
                </ListStyles>
            </StudentsWrapper>
        </>
    );
};

export default UsersList;
