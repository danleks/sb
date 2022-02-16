import { worker } from 'mocks/browser';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from 'views/Root';

worker.start().then(() => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Root />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root'),
    );
});
