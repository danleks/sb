import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';
import React from 'react';

import { FormFieldStyles } from './FormField.styles';

const FormField = React.forwardRef(({ label, name, id, type = 'text', value, onChange, placeholder }, ref) => {
    return (
        <FormFieldStyles>
            <Label>{label}</Label>
            <Input ref={ref} name={name} id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} />
        </FormFieldStyles>
    );
});

export default FormField;
