import { fadeAwayOpener } from "./fadeAwayOpener";

export const fadeInOpener = () => {
    const openingContainer = document.getElementById("opening-container");
    openingContainer.classList.add("fadeInOpener");
    setTimeout(fadeAwayOpener, 8000);
}
