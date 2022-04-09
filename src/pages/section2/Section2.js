import { useState, useEffect } from "react";
import { Instructions } from "../../components/instructions/Instructions"
import { SelectionList } from "../../components/selectionList/SelectionList"
import axios from 'axios';

export const Section2 = () => {
 
    return (
        <div
            id="section2"
            className="
                grid 
                grid-rows-[2fr_1fr_5fr]
                gap-4
                grid-cols-1
                h-screen
                w-screen
                max-w-full
                p-4"
        >
            <Instructions />
            <SelectionList />
        </div>
    )
}