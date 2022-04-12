import { Section1 } from "./pages/section1/Section1";
import { Section2 } from "./pages/section2/Section2";
import { CharacterContext } from "./context/CharacterContext";
import { useGetCharacters } from "./hooks/useGetCharacters";
import Lottie from "react-lottie";
import animationData from "./animation/babyYodaLottie.json";
import { useState, useEffect } from "react";

export const App = () => {

    const characters = useGetCharacters();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoading(true), 3000);
    }, [])

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
