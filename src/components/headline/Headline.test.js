import ReactDOM from 'react-dom';
import { Headline } from './Headline';

describe('Headline', () => {
    it('renders the Star Wars headline', () => {
        const container = document.createElement('div');
        ReactDOM.render(<Headline />, container);
        expect(container.textContent).toMatch('Star Wars');
    });
});
