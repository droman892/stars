export const CharacterData = ({selected, characterInfo, desc}) => {
    return (
        <>
            {selected.length > 0 ? (
                    <>
                        <div className="mb-6 flex justify-between" id="charData">
                            <h3 className="text-3xl inline" id="characterData">
                                {desc}
                            </h3>
                            <h3 className="text-3xl inline" id="characterData">
                                {characterInfo}
                            </h3>
                        </div>

                        
                    </>
                ) : (
                    <></>
                )}
        </>
    )
}
