export const SelectOptions = ({selected, characters, decision}) => {

    return (
        <>
            {characters.length > 0 ? (
                <select 
                    id="characters"
                    name="characters" 
                    className="text-3xl" 
                    value={selected}
                    onChange={(e) => decision(e)}
                >

                    <option value='' defaultValue='selected'>Select Your Character</option>

                    {characters.map((character) => 
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
