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
                absolute
                bg-white"
        >
            <div id="lottie-container" className="mt-32">   
                <Lottie 
                    id="baby-yoda"
                    options={defaultLottieOptions}
                    className="w-auto h-auto lottie" 
                />
            </div> 
        </div> 
    )
}
