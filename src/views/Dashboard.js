import axios from 'axios';
import UsersList from 'components/organisms/UsersList/UsersList';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import { DashboardStyles } from './Dashboard.styles';

const Dashboard = () => {
    const [students, setStudents] = useState([]);
    const [groups, setGroups] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get('/groups').then((data) => setGroups(data.data.groups));
    }, []);

    useEffect(() => {
        axios
            .get(`/students/${id || groups[0]}`)
            .then((data) => setStudents(data.data.students))
            .catch((e) => console.log(e));
    }, [id, groups]);
    return (
        <DashboardStyles>
            <nav>
                <span>Group {id || groups[0]}</span>
                <ul>
                    {groups.map((group) => (
                        <li>
                            <NavLink key={group} to={`/group/${group}`}>
                                {group}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <UsersList students={students} />
        </DashboardStyles>
    );
};

export default Dashboard;
