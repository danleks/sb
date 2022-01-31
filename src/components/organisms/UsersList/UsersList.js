import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper';
import { UsersContext } from 'providers/UsersProvider';
import React, { useContext } from 'react';

import { ListStyles } from './UsersList.styles';

const UsersList = ({ users }) => {
    const { isLoading } = useContext(UsersContext);
    return (
        <>
            <ViewWrapper>
                <h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
                <ListStyles>
                    {users.map((user) => {
                        return <UsersListItem key={user.name} user={user} />;
                    })}
                </ListStyles>
            </ViewWrapper>
        </>
    );
};

export default UsersList;
