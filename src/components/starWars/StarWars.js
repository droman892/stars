import SWLogo from "../../assets/SWLogo.webp";
import TopSpaceBackground from "../../assets/TopSpaceBackground.png";
import Space from "../../assets/SpaceBackground.png"

export const StarWars = () => {

    return (
        <div 
            id="sw-crawl"
            className="
                h-screen
                w-screen
                max-w-full"
        >
                {/* <div className="
                        flex
                        justify-center
                        overflow-hidden"
                >
                    <picture  id="sw-picture" className="self-center">
                        <img id="sw-logo" src={SWLogo} alt="Star Wars Logo" />
                    </picture>
                    
                </div> */}



                {/* <img id="topSpaceBackground" src={TopSpaceBackground} alt="Top Space Background"></img> */}

{/* <div id="try">


</div> */}


                    <div id="crawl-wrap" className="flex h-full crawl-wrap">



<div id="space-container"></div>


                        <div id="crawl-text-container" className="sw-yellow">
                            <p className="text-center">Episode I</p>
                            <p className="text-center">THE DROMAN</p>
                            <p> Havoc struck the galaxy in a most peculiar way.  One day, Bergumo, the star of Constellation Alonzaz Major, became a supernova, SN 2050Z. The shockwave created by the nuclear fusion was unlike anything anyone in the known universe ever witnessed before.  In the blink of an eye, all knowledge from the universally renown movie series, Star Wars, disappeared from existence. </p>
                            <p> This moment in history became known as The Droman.  Since then, all species have experienced a subtle frustration, a craving to satisfy their desires for quality entertainment, which has led to looting, murder, and war. </p>
                            <p> It took over half a century, but software engineers managed to extract the original Star Wars data from SN 2050Z's nebula and provide a way for the masses to satisfy their entertainment itch.  Learn as much as you can while there's time.  There's no telling if or when The Droman will return...</p>
                        </div>


                        
                    </div>



        </div>
    )
}
