import { Headline } from "./components/headline/Headline";
import { Caption } from "./components/caption/Caption";
import { ReadyLink } from "./components/readyLink/ReadyLink";
import { Section2 } from "./pages/section2/Section2";

export const App = () => {
    return (
        <>
            {/* <div 
                id="section1" 
                className="
                    grid 
                    gap-4 
                    grid-cols-12
                    grid-rows-6"
            >
                <Headline />
                <Caption />
                <ReadyLink />
            </div> */}
            <Section2 />
        </>
        
    )
};
