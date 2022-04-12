import { useState } from "react";

export const useSetCharacters = () => {

    const [characters, setCharacters] = useState(null);

    return { characters, setCharacters}

};
