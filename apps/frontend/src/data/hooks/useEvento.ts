import { useContext } from "react";
import ContextoEvento from "../contexts/ContextoEvento";

const useEvento = () => useContext(ContextoEvento);
export default useEvento;
