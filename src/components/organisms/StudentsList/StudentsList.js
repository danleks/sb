import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import useStudents from 'hooks/useStudents';
import { UsersContext } from 'providers/UsersProvider';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ListStyles, StudentsWrapper } from './StudentsList.styles';

const StudentsList = () => {
    const { id } = useParams();
    const { isLoading } = useContext(UsersContext);
    const { students } = useStudents({ groupId: id });

    return (
        <>
            <StudentsWrapper>
                <h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
                <ListStyles>
                    {students.map((student) => {
                        return <UsersListItem key={student.name} user={student} />;
                    })}
                </ListStyles>
            </StudentsWrapper>
        </>
    );
};

export default StudentsList;
