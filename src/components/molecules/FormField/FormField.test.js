import renderWithProviders from 'helpers/renderWithProviders';

import FormField from './FormField';

describe('Form Field', () => {
    it('renders form field', () => {
        renderWithProviders(<FormField name="name" id="name" type="text" />);
    });
});
