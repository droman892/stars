export const CharacterData = ({selected, characterInfo, desc}) => {
    return (
        <>
            {selected.length > 0 ? (
                    <>
                        <div className="mb-4 px-3 flex justify-between" id="charData">
                            <h3 className="text-3xl inline mr-2" id="characterData">
                                {desc}
                            </h3>
                            <h3 className="text-3xl inline end-align" id="characterData">
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
