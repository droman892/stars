import { useEffect } from "react";
import { StarWars } from "../starWars/StarWars";
import { fadeInOpener } from "../../functions/fadeInOpener";

export const Opener = () => {

    useEffect(() => {setTimeout(fadeInOpener, 3000)}, []);

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
