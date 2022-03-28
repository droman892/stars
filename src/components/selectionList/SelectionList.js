import { useState, useEffect } from "react";

export const SelectionList = ({characters}) => {

    const characterArray = [...characters];

    const [selected, setSelected] = useState('');
    // console.log("Selected State: " + selected);

    

    const decision = (e) => {
        setSelected(e.target.value)
        // console.log(e.target.value)
    }

    const [characterInfo, setCharacterInfo] = useState('');

    // console.log(characterInfo);

    


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
                id="selectionContainer" 
                className="
                    col-start-2
                    col-end-12
                    row-start-3
                    row-end-4
                    justify-center
                    content-center
                    text-center
                    grid
                    place-content-center"
            >
                {characterArray.length > 0 ? (
                        <select 
                            id="characters"
                            name="characters" 
                            className="text-4xl" 
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
                    gap-4
                    grid-cols-4
                    col-start-2
                    col-end-12
                    row-start-4"
            >

                {selected.length > 0 ? (
                <>
                        <h3 className="text-4xl">
                            Birth Year:
                        </h3>
                        <h3 className="text-4xl">
                            {characterInfo.birth_year}
                        </h3>
                        <h3 className="text-4xl">
                            Hair Color:
                        </h3>
                        <h3 className="text-4xl">
                            {characterInfo.hair_color}
                        </h3>
                        <h3 className="text-4xl">
                            Gender:
                        </h3>
                        <h3 className="text-4xl">
                            {characterInfo.gender}
                        </h3>
                        <h3 className="text-4xl">
                            Eye Color:
                        </h3>
                        <h3 className="text-4xl">
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
