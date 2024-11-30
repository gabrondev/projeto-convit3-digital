import { useContext } from "react";
import ContextoEventos from "../contexts/ContextoEventos";

const useEventos = () => useContext(ContextoEventos);
export default useEventos;