import Button from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';
import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper';
import { useForm } from 'hooks/useForm';
import { UsersContext } from 'providers/UsersProvider';
import React, { useContext, useEffect, useRef } from 'react';

const INIT_FORM_VALUES = {
    name: '',
    attendance: '',
    average: '',
    consent: false,
    errorMessage: '',
};

const AddUser = () => {
    const { formValues, handleFormValueChange, handleClearForm, handleThrowError, handleFormConsent } = useForm(INIT_FORM_VALUES);

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, []);
    const { handleUserAdd } = useContext(UsersContext);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (formValues.consent) {
            console.log('is consent');
            handleUserAdd(formValues);
            handleClearForm();
        } else {
            console.log('no consent');
            handleThrowError();
        }
    };

    return (
        <ViewWrapper as="form" onSubmit={handleFormSubmit}>
            <FormField
                ref={inputRef}
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
            <FormField
                label="consent"
                name="consent"
                id="consent"
                type="checkbox"
                value={formValues.consent}
                onChange={handleFormConsent}
                data-testid="average"
            />
            <Button type="submit">Add</Button>
            <p>{!formValues.consent ? formValues.errorMessage : null}</p>
        </ViewWrapper>
    );
};

export default AddUser;
