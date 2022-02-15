import { fireEvent, screen } from '@testing-library/react';
import renderWithProviders from 'helpers/renderWithProviders';

import AddUser from './AddUser';
import Dashboard from './Dashboard';

describe('Add User', () => {
    it('checks if user is added', () => {
        renderWithProviders(
            <>
                <AddUser />
                <Dashboard />
            </>,
        );
        fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'alexTest' } });
        fireEvent.change(screen.getByPlaceholderText('Attendance'), { target: { value: '50' } });
        fireEvent.change(screen.getByPlaceholderText('Average'), { target: { value: '2.3' } });
        fireEvent.click(screen.getByPlaceholderText('consent'));
        fireEvent.click(screen.getByText('Add'));
        screen.getByText('alexTest');
    });
});
