import { handlers } from 'mocks/handlers';
import { setupServer } from 'msw/node';
import { fireEvent, render, screen, waitFor } from 'test-utils';

import SearchBar from './SearchBar';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Search Bars', () => {
    it('render the component', () => {
        render(<SearchBar />);
        screen.queryByText('Teacher');
    });
    it('shows search result when query is matching', async () => {
        render(<SearchBar />);
        const input = screen.getByPlaceholderText('find student');
        fireEvent.change(input, { target: { value: 'patr' } });
        await screen.findByText('Patrycja Gonciarz');
    });
    it('hides search results box when input is cleared', async () => {
        render(<SearchBar />);
        const input = screen.getByPlaceholderText('find student');
        fireEvent.change(input, { target: { value: 'patr' } });
        const user = await screen.findByText('Patrycja Gonciarz');
        expect(user).toBeInTheDocument();
        fireEvent.change(input, { target: { value: '' } });
        await waitFor(() => {
            expect(user).not.toBeInTheDocument();
        });
    });
});
