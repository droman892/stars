import { useEffect } from "react";
import { useSetCharacters } from "./useSetCharacters";
import axios from 'axios';

export const useGetCharacters = () => {

    const { characters, setCharacters } = useSetCharacters();

    useEffect(() => {

        const getCharacters = async () => {
            try {
                const res = await axios.get('https://swapi.dev/api/people');
                setCharacters(res.data.results)
                console.log(res.data.results);
            } catch (err) {
                console.error('CAUGHT IN API REQUEST - ' + err);
            }
        };

        getCharacters();

    }, [setCharacters]);

    return characters
};
