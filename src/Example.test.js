import React from 'react';
import ReactDOM from 'react-dom';
import { Example } from './Example';

describe('Example', () => {
    it('renders the customer first name', () => {
        const customer = { firstName: 'Ashley'};
        const component = <Example customer={customer} />;
        const container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(component, container);
        expect(document.body.textContent).toMatch('Ashley');
    });

    it.skip('renders another customer first name', () => {
        const customer = { firstName: 'Jordan'};
        const component = <Example customer={customer} />;
        const container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(component, container);
        expect(document.body.textContent).toMatch('Jordan');
    });
});
