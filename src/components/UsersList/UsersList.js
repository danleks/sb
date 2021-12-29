import UsersListItem from 'components/UsersListItem/UsersListItem';
import { users } from 'data/users';
import React from 'react';

const UsersList = () => {
    return (
        <div>
            {users.map((user) => {
                return <UsersListItem key={user.name} user={user} />;
            })}
        </div>
    );
};

export default UsersList;
