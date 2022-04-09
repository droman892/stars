import { useState, useEffect, useContext } from "react";
import { useSelected } from "../../hooks/useSelected";
import { useDecision } from "../../pages/functions/decision";
import { SelectOptions } from "../selectOptions/SelectOptions";
import { CharacterData } from "../characterData/CharacterData";
import { CharacterContext } from "../../context/CharacterContext";

export const SelectionList = () => {

    const characters = useContext(CharacterContext);
    console.log(characters)

    const { selected, setSelected } = useSelected();
    // console.log(selected);

    const decision = (e) => {
        setSelected(e.target.value)
    }

    const [characterInfo, setCharacterInfo] = useState('');

    useEffect(() => {

       

       for (let i=0; i < characters.length; i ++) {
        if (characters[i].name === selected) {
            setCharacterInfo(characters[i])
        }
    } 
    }, [selected, characters])

    return (
        <>
            <div
                id="selectionList" 
                className="
                grid
                place-content-center
                overflow-hidden"
            >
                <SelectOptions characters={characters} decision={decision} selected={selected}/>
            </div>

            <div 
                id="results"
                className="
                    max-w-xl
                    justify-self-center    
                    px-5
                    pb-32"
            >

                <CharacterData selected={selected} characterInfo={characterInfo.birth_year} desc="Birth Year:"/>
                <CharacterData selected={selected} characterInfo={characterInfo.hair_color} desc="Hair Color:"/>
                <CharacterData selected={selected} characterInfo={characterInfo.gender} desc="Gender:"/>
                <CharacterData selected={selected} characterInfo={characterInfo.eye_color} desc="Eye Color:"/>

            </div>
        </>
    )
}
