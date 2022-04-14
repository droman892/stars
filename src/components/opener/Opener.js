import { useEffect } from "react";
import { StarWars } from "../starWars/StarWars";

export const Opener = () => {

    const fadeAwayOpener = () => {
        const openingContainer = document.getElementById("opening-container");
        openingContainer.classList.add("fadeAwayOpener");
        setTimeout(removeOpener, 5000);
    }

    const removeOpener = () => {
        const openingLine = document.getElementById("opener");
        openingLine.remove();

        swCrawler();
    }

    const swCrawler = () => {
        const sw = document.getElementById("sw");
        sw.classList.add("add-display");
    }

    useEffect(() => {

        const fadeInOpener = () => {
            const openingContainer = document.getElementById("opening-container");
            openingContainer.classList.add("fadeInOpener");
            setTimeout(fadeAwayOpener, 10000);
        }
        
        setTimeout(fadeInOpener, 3000);
    }, []);

    return (
        <>
            <div 
                id="opener"
                className="
                    grid 
                    gap-8
                    grid-cols-1
                    h-screen
                    w-screen
                    max-w-full
                    p-4
                    bg-black"
            >
                <div 
                    id="opening-container"
                    className="
                    flex
                    justify-center
                    overflow-hidden"
                >
                    <h1 id="opening-line" className="opener self-center">
                        A long time ago in a galaxy far, far away...
                    </h1>
                </div>
            </div>

            <div id="sw" className="hidden">
                <StarWars />
            </div>
        </>
    )
}
