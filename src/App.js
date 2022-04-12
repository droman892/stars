import { Section1 } from "./pages/section1/Section1";
import { Section2 } from "./pages/section2/Section2";
import { CharacterContext } from "./context/CharacterContext";
import { useGetCharacters } from "./hooks/useGetCharacters";

export const App = () => {

    const characters = useGetCharacters();

    console.log(characters);

    if (!characters) return <h1>The page isn't ready.</h1>;

    return (
        <>
            <Section1 />
            <CharacterContext.Provider value={characters}>
                <Section2 />
            </CharacterContext.Provider>
        </>
    )
};
