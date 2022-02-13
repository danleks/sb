import React from 'react';

import { InputStyles } from './Input.styles';

const Input = React.forwardRef((props, ref) => {
    return <InputStyles ref={ref} {...props} />;
});

export default Input;
