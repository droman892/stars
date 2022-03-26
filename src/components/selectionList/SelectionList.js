import { useState } from "react";

export const SelectionList = ({characters}) => {

    console.log(characters);

    const [selected, setSelected] = useState('');
    // console.log(selected);


    const setData = () => {
        console.log('Jerry');
    }

    const test = (e) => {
        
        setSelected(e.target.value)
    }

    console.log(selected);

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

                {characters.length > 0 ? (
                        <select 
                            id="characters"
                            name="characters" 
                            className="text-4xl" 
                            value={selected}
                            // onChange={(e) => setSelected(e.target.value)}>
                            onChange={(e) => test(e)}>
                            {characters.map((character) => 
                                <option 
                                    value={character.name} 
                                    key={character.name}
                                    onChange={setData}
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
                    grid-rows-2
                    col-start-2
                    col-end-12
                    row-start-4
                    row-end-6"
            >
                {characters.length > 0 ? (
                    <>
                        <h3 className="text-4xl">
                            Birth Year:
                        </h3>
                        <h3 className="text-4xl">
                            ...
                        </h3>
                        <h3 className="text-4xl">
                            Hair Color:
                        </h3>
                        <h3 className="text-4xl">
                            ...
                        </h3>
                        <h3 className="text-4xl">
                            Gender:
                        </h3>
                        <h3 className="text-4xl">
                            ...
                        </h3>
                        <h3 className="text-4xl">
                            Eye Color:
                        </h3>
                        <h3 className="text-4xl">
                            ...
                        </h3>    
                    </>
                    ) : (
                        <></>
                    )
                }
            </div>
        </>
    )
}
