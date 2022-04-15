import { removeOpener } from "./removeOpener";

export const fadeAwayOpener = () => {
    const openingContainer = document.getElementById("opening-container");
    openingContainer.classList.add("fadeAwayOpener");
    setTimeout(removeOpener, 5000);
}
