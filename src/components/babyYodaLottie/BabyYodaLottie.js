import Lottie from "react-lottie";
import { defaultLottieOptions } from "../../utils/defaultLottieOptions";

export const BabyYodaLottie = () => {

    return (
        <div 
            id="lottie-page"
            className="
                h-screen
                w-screen
                max-w-full
                absolute"
        >
            <div id="lottie-container" className="mt-32">   
                <Lottie 
                    id="baby-yoda"
                    options={defaultLottieOptions}
                    height={400}
                    width={400}    
                />
            </div> 
        </div> 
    )
}
