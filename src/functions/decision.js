import { useState } from "react";
import { useSelected } from "../../hooks/useSelected";


export const useDecision = (e) => {

    const { selected, setSelected } = useSelected();

    return setSelected(e.target.value)
}