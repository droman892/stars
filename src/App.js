import { Section1 } from "./pages/section1/Section1";
import { Section2 } from "./pages/section2/Section2";
import { CharacterContext } from "./context/CharacterContext";
import { useGetCharacters } from "./hooks/useGetCharacters";
import { BabyYodaLottie } from "./components/babyYodaLottie/BabyYodaLottie";

export const App = () => {

    const characters = useGetCharacters();

    if (!characters) return <BabyYodaLottie />; 
        
    return (
        <>
            <Section1 />
            <CharacterContext.Provider value={characters}>
                <Section2 />
            </CharacterContext.Provider>
        </>
    )
};
