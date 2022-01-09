import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper';
import React from 'react';

import { ListStyles } from './UsersList.styles';

const UsersList = ({ isLoading, users, deleteUser }) => {
    return (
        <>
            <ViewWrapper>
                <h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
                <ListStyles>
                    {users.map((user) => {
                        return <UsersListItem deleteUser={deleteUser} key={user.name} user={user} />;
                    })}
                </ListStyles>
            </ViewWrapper>
        </>
    );
};

export default UsersList;
