import axios from 'axios';
import { useCallback } from 'react';

const useStudents = () => {
    const getGroups = useCallback(async () => {
        try {
            const { data } = await axios.get('/groups');
            return data.groups;
        } catch (e) {
            console.log(e);
        }
    }, []);

    const getStudents = useCallback(async (groupId) => {
        try {
            const { data } = await axios.get(`/students/${groupId}`);
            return data.students;
        } catch (e) {
            console.log(e);
        }
    }, []);

    const findStudents = async (phrase) => {
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
        getGroups,
        getStudents,
        findStudents,
    };
};

export default useStudents;
