import { useState, useEffect } from "react";
import { Instructions } from "../../components/instructions/Instructions"
import { SelectionList } from "../../components/selectionList/SelectionList"
import axios from 'axios';

export const Section2 = () => {

    const [characters, setCharacters] = useState([]);

    // useEffect(() => {
    //     axios.get('https://swapi.dev/api/people').then(res => 
    //         setCharacters(res.data.results))
    //         .catch(err => {
    //             console.log('Error Message' + err)
    //         });
    //   }, []);

    

    useEffect(() => {
        const sendGetRequest = async () => {
        try {
            const res = await axios.get('https://swapi.dev/api/people');
            setCharacters(res.data.results)
        } catch (err) {
            console.error(err);
        }
        };
        sendGetRequest();
    }, []);
 
    return (
        <div
            id="section2" 
            className="
                grid 
                gap-4 
                grid-cols-12
                grid-rows-6"
        >
            <Instructions />
            <SelectionList characters={characters}/>
        </div>
    )
}