import UsersList from 'components/organisms/StudentsList/StudentsList';
import useStudents from 'hooks/useStudents';
import React from 'react';
import { NavLink, Navigate, useParams } from 'react-router-dom';

import { DashboardStyles } from './Dashboard.styles';

const Dashboard = () => {
    const { id } = useParams();
    const { groups } = useStudents();

    if (!id && groups.length > 0) return <Navigate to={`/group/${groups[0]}`} />;

    return (
        <DashboardStyles>
            <nav>
                <span>Group {id || groups[0]}</span>
                <ul>
                    {groups.map((group) => (
                        <li key={group}>
                            <NavLink to={`/group/${group}`}>{group}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <UsersList />
        </DashboardStyles>
    );
};

export default Dashboard;
