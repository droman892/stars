export const SelectionList = ({characters}) => {

    return (
        <div className="
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
            <select name="characters" id="characters" className="text-4xl">
                {characters.map((character) => 
                    <option value={character.name} key={character.name}>
                        {character.name}
                    </option>
                )}
            </select>
        </div>
    )
}
