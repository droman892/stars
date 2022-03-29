import { useState } from "react";

export const useSelected = () => {
    
    const [selected, setSelected] = useState('');

    return {selected, setSelected};
}
