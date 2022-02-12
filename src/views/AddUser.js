import Button from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';
import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper';
import { UsersContext } from 'providers/UsersProvider';
import React, { useContext, useState } from 'react';

const INIT_FORM_VALUES = {
    name: '',
    attendance: '',
    average: '',
};

const AddUser = () => {
    const [formValues, setFormValues] = useState(INIT_FORM_VALUES);
    const { handleUserAdd } = useContext(UsersContext);
    const handleFormValueChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleUserAdd(formValues);
        setFormValues(INIT_FORM_VALUES);
    };
    return (
        <ViewWrapper as="form" onSubmit={handleFormSubmit}>
            <FormField
                placeholder="Name"
                label="name"
                name="name"
                id="namename"
                type="text"
                value={formValues.name}
                onChange={handleFormValueChange}
                data-testid="name"
            />
            <FormField
                placeholder="Attendance"
                label="attendance"
                name="attendance"
                id="attendance"
                type="text"
                value={formValues.attendance}
                onChange={handleFormValueChange}
                data-testid="attendance"
            />
            <FormField
                placeholder="Average"
                label="average"
                name="average"
                id="average"
                type="text"
                value={formValues.average}
                onChange={handleFormValueChange}
                data-testid="average"
            />
            <Button type="submit">Add</Button>
        </ViewWrapper>
    );
};

export default AddUser;
