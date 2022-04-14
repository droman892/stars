import { useEffect } from "react";
import { StarWars } from "../starWars/StarWars";

export const Opener = () => {

    const fadeInOpener = () => {
        const openingLine = document.getElementById("opening-line");
        openingLine.classList.add("fadeInOpener");
    }

    const fadeAwayOpener = () => {
        const openingLine = document.getElementById("opening-line");
        openingLine.classList.add("fadeAwayOpener");
    }

    const removeOpener = () => {
        const openingLine = document.getElementById("opening-line");
        openingLine.remove();
    }

    const swCrawler = () => {
        const opener = document.getElementById("opener");
        opener.classList.add("remove-display");

        const sw = document.getElementById("sw");
        sw.classList.add("add-display");
    }

    useEffect(() => {
        setTimeout(fadeInOpener, 2000);
        setTimeout(fadeAwayOpener, 10000);
        setTimeout(removeOpener, 11000);
        setTimeout(swCrawler, 13000);
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
