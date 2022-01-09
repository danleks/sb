import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';
import React from 'react';

import { FormFieldStyles } from './FormField.styles';

const FormField = ({ label, name, id, type = 'text', value, onChange }) => {
    return (
        <FormFieldStyles>
            <Label>{label}</Label>
            <Input name={name} id={id} type={type} value={value} onChange={onChange} />
        </FormFieldStyles>
    );
};

export default FormField;
