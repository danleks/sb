import { useReducer } from 'react';

const actionTypes = {
    updateFormValues: 'UPDATE_FORM_VALUES',
    clearFormValues: 'CLEAR_FORM_VALUES',
    consent: 'CONSENT',
    error: 'ERROR',
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.updateFormValues:
            return {
                ...state,
                [action.field]: action.value,
            };
        case actionTypes.clearFormValues:
            return action.value;
        case actionTypes.consent:
            return {
                ...state,
                consent: !state.consent,
            };
        case actionTypes.error:
            return {
                ...state,
                errorMessage: action.message,
            };
        default:
            return state;
    }
};

export const useForm = (INIT_FORM_VALUES) => {
    const [formValues, dispatch] = useReducer(reducer, INIT_FORM_VALUES);

    const handleFormValueChange = (e) => {
        dispatch({
            type: actionTypes.updateFormValues,
            field: e.target.name,
            value: e.target.value,
        });
    };

    const handleClearForm = () => dispatch({ type: actionTypes.clearFormValues, value: INIT_FORM_VALUES });

    const handleThrowError = () => dispatch({ type: actionTypes.error, message: 'Please give consent' });

    const handleFormConsent = () => dispatch({ type: actionTypes.consent });

    return {
        formValues,
        handleFormValueChange,
        handleClearForm,
        handleThrowError,
        handleFormConsent,
    };
};
