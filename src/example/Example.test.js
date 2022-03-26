import ReactDOM from 'react-dom';
import { Example } from './Example';

describe('Example', () => {
    it.skip('renders the customer first name', () => {
        const customer = { firstName: 'Ashley'};
        const container = document.createElement('div');
        ReactDOM.render(<Example customer={customer} />, container);
        expect(container.textContent).toMatch('Ashley');
    });

    it.skip('renders another customer first name', () => {
        const customer = { firstName: 'Jordan'};
        const container = document.createElement('div');
        ReactDOM.render(<Example customer={customer} />, container);
        expect(container.textContent).toMatch('Jordan');
    });
});



