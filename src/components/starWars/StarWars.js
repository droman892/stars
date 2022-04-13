import { useEffect } from "react";
import SWLogo from "../../assets/SWLogo.webp";

export const StarWars = ( {characters} ) => {



    const shrinkLogo = () => {
        const logo = document.getElementById("sw-logo");
        logo.classList.add("final-sw-logo-size");
    }

    // useEffect(() => {
    //     shrinkLogo();
    // }, []);

    return (
        <div 
            id="sw-header"
            className="
                grid 
                gap-8
                grid-cols-1
                h-screen
                w-screen
                max-w-full
                p-4
                bg-black
                sw-space"
        >
                <div className="
                        flex
                        justify-center
                        overflow-hidden"
                >
                    <picture  className="self-center">
                        {/* <source srcSet={SWLogo} type="image/webp" alt="Star Wars Logo"/>
                        <source srcSet={SWLogo} type="image/png" /> */}
                        <img id="sw-logo" src={SWLogo} alt="Star Wars Logo" className="sw-transition" />
                    </picture>
                    
                </div>
        </div>
    )
}
