import { Headline } from "../../components/headline/Headline";
import { Caption } from "../../components/caption/Caption";

export const Section1 = () => {
    return (
        <div 
            id="section1"
            className="
                grid 
                gap-8
                grid-cols-1
                h-screen
                w-screen
                max-w-full
                p-4"
        >
            <Headline />
            <Caption />
        </div>
    )
}