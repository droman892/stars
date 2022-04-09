import { Section1 } from "./pages/section1/Section1";
import { Section2 } from "./pages/section2/Section2";
import { useState, useEffect, createContext } from "react";
import { CharacterContext } from "./context/CharacterContext";
import axios from 'axios';

export const App = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {

        const sendGetRequest = async () => {
            try {
                const res = await axios.get('https://swapi.dev/api/people');
                setCharacters(res.data.results)
            } catch (err) {
                console.error('CAUGHT IN API REQUEST - ' + err);
            }
        };

        sendGetRequest();

    }, []);

    if (!characters) return <></>;

    return (
        <>
            <Section1 />
            <CharacterContext.Provider value={characters}>
                <Section2 />
            </CharacterContext.Provider>
        </>
        
    )
};
