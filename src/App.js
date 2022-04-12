import { Section1 } from "./pages/section1/Section1";
import { Section2 } from "./pages/section2/Section2";
import { CharacterContext } from "./context/CharacterContext";
import { useGetCharacters } from "./hooks/useGetCharacters";
import Lottie from "react-lottie";
import animationData from "./animation/babyYodaLottie.json";

export const App = () => {

    const characters = useGetCharacters();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    if (!characters) {
        return (
            <div>
                <Lottie 
                    options={defaultOptions}
                    height={400}
                    width={400}
                />
            </div>
        )
    }

    return (
        <>
            <Section1 />
            <CharacterContext.Provider value={characters}>
                <Section2 />
            </CharacterContext.Provider>
        </>
    )
};
