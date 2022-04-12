
import axios from 'axios';

export const getCharacters = async () => {
    try {
        const res = await axios.get('https://swapi.dev/api/people');
        setCharacters(res.data.results)
    } catch (err) {
        console.error('CAUGHT IN API REQUEST - ' + err);
    }
};
