import { useSelected } from "../../hooks/useSelected";

export const useDecision = (e) => {
    const { setSelected } = useSelected();
    setSelected(e.target.value)
}
