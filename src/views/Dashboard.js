import UsersList from 'components/organisms/UsersList/UsersList';
import { UsersContext } from 'providers/UsersProvider';
import React, { useContext } from 'react';

const Dashboard = () => {
    const { users } = useContext(UsersContext);

    return <UsersList users={users} />;
};

export default Dashboard;
