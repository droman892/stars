import ReactDOM from 'react-dom';
import { App } from './App';

describe('App', () => {
    it('serves as the main application container', () => {
        const container = document.createElement('div');
        ReactDOM.render(<App />, container);
    })
})
