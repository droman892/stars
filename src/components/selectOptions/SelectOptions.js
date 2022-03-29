export const SelectOptions = ({selected, characters, decision}) => {

    const characterArray = [...characters];

    return (
        <>
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
            )}
        </>
    )
}