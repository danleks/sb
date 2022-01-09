import Button from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';
import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper';
import React from 'react';

const Form = ({ handleUserAdd, formValues, handleFormValueChange }) => {
    return (
        <ViewWrapper as="form" onSubmit={handleUserAdd}>
            <FormField label="name" name="name" id="name" type="text" value={formValues.name} onChange={handleFormValueChange} />
            <FormField
                label="attendance"
                name="attendance"
                id="attendance"
                type="text"
                value={formValues.attendance}
                onChange={handleFormValueChange}
            />
            <FormField label="average" name="average" id="average" type="text" value={formValues.average} onChange={handleFormValueChange} />
            <Button type="submit">Add</Button>
        </ViewWrapper>
    );
};

export default Form;
