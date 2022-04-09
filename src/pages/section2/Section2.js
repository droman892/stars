import { useState, useEffect } from "react";
import { Instructions } from "../../components/instructions/Instructions"
import { SelectionList } from "../../components/selectionList/SelectionList"
import axios from 'axios';

export const Section2 = () => {

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
        <div
            id="section2"
            className="

                grid 
                grid-rows-[2fr_1fr_5fr]
                gap-4
                grid-cols-1
                h-screen
                w-screen
                max-w-full
                p-4"
        >
            <Instructions />
            <SelectionList characters={characters}/>
        </div>
    )
}