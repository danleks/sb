import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { users } from 'data/users';
import React from 'react';

import { ListStyles, Wrapper } from './UsersList.styles';

const UsersList = () => {
    return (
        <Wrapper>
            <ListStyles>
                {users.map((user) => {
                    return <UsersListItem key={user.name} user={user} />;
                })}
            </ListStyles>
        </Wrapper>
    );
};

export default UsersList;
