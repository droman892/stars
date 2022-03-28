import { ReadyLink } from "../readyLink/ReadyLink"


export const Caption = () => {
    return (
        <div 
            id="caption"
            className="
            

            flex flex-col
            text-center
            overflow-hidden"
        >
            <h3 className="text-3xl">
                Developers took on one of history's most iconic movie 
                series and publicized its juicy content.
            </h3>

            <ReadyLink />
        </div>
    )
}