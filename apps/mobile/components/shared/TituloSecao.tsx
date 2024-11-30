import { fontBold, py4, selfStart, textXl, textZinc400 } from "@/style";
import { Text } from "react-native";

export interface TituloSecaoProps{
    texto: string;
}

export default function TituloSecao(props: TituloSecaoProps){
    return (
        <Text style={[textXl, fontBold, py4, textZinc400, selfStart]}>
            {props.texto}
        </Text>
    )
}