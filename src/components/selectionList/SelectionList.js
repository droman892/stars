import { useState, useEffect } from "react";

export const SelectionList = ({characters}) => {

    const characterArray = [...characters];

    const [selected, setSelected] = useState('');

    const decision = (e) => {
        setSelected(e.target.value)
    }

    const [characterInfo, setCharacterInfo] = useState('');

    useEffect(() => {
       for (let i=0; i < characterArray.length; i ++) {
        if (characterArray[i].name === selected) {
            setCharacterInfo(characterArray[i])
        }
    } 
    }, [selected, characterArray])

    return (
        <>
            <div
                id="selectionList" 
                className="
                grid
                place-content-center
                overflow-hidden"
            >
                {characterArray.length > 0 ? (
                        <select 
                            id="characters"
                            name="characters" 
                            className="text-3xl" 
                            value={selected}
                            onChange={(e) => decision(e)}
                        >

                            <option value='' defaultValue='selected'>Select Your Character</option>

                            {characterArray.map((character) => 
                                <option 
                                    value={character.name} 
                                    key={character.name}
                                    hair={character.hair_color}
                                >
                                    {character.name}
                                </option>
                            )}
                        </select>
                    ) : (
                        <></>
                    )
                }
            </div>

            <div 
                id="results"
                className="
                    grid
                    grid-cols-2
                    p-5"
            >

                {selected.length > 0 ? (
                <>
                        <h3 className="text-3xl">
                            Birth Year:
                        </h3>
                        <h3 className="text-3xl">
                            {characterInfo.birth_year}
                        </h3>
                        <h3 className="text-3xl">
                            Hair Color:
                        </h3>
                        <h3 className="text-3xl">
                            {characterInfo.hair_color}
                        </h3>
                        <h3 className="text-3xl">
                            Gender:
                        </h3>
                        <h3 className="text-3xl">
                            {characterInfo.gender}
                        </h3>
                        <h3 className="text-3xl">
                            Eye Color:
                        </h3>
                        <h3 className="text-3xl">
                            {characterInfo.eye_color}
                        </h3>    
                    </>
                ) : (
                    <></>
                )}

            </div>
        </>
    )
}
