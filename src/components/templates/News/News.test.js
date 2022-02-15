import { screen } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import renderWithProviders from 'helpers/renderWithProviders';

import { query } from './News';
import News from './News';

const mock = new MockAdapter(axios);

const articles = {
    data: {
        allArticles: [
            {
                id: 1,
                title: 'kuku',
                category: 'kuku',
                content: 'kuku',
            },
        ],
    },
};

describe('News template', () => {
    afterEach(() => {
        mock.reset();
    });

    it('throws error with bad request', async () => {
        mock.onPost('https://graphql.datocms.com/', { query }).reply(500);
        renderWithProviders(<News />);
        await screen.findByText(/cannot/i);
    });
    it('shows articles', async () => {
        mock.onPost('https://graphql.datocms.com/', { query }).reply(200, articles);
        renderWithProviders(<News />);
        await screen.findAllByText(/kuku/i);
    });
});
