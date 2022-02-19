import axios from 'axios';
import { useEffect, useState } from 'react';

const useStudents = ({ groupId = '', searchPhrase = '' } = {}) => {
    const [students, setStudents] = useState([]);
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('/groups');
                setGroups(data.groups);
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    useEffect(() => {
        if (!groupId) return;
        (async () => {
            try {
                const { data } = await axios.get(`/students/${groupId}`);
                setStudents(data.students);
            } catch (e) {
                console.log(e);
            }
        })();
    }, [groupId]);

    const findStudents = async (phrase) => {
        console.log(phrase);
        try {
            const { data } = await axios.post(`/students/search`, {
                phrase,
            });
            return data;
        } catch (e) {
            console.log(e);
        }
    };

    return {
        students,
        groups,
        findStudents,
    };
};

export default useStudents;
