import { swCrawler } from "./swCrawler";

export const removeOpener = () => {
    const openingLine = document.getElementById("opener");
    openingLine.remove();

    swCrawler();
}
