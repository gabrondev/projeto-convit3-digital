import { border, borderZinc800, fontBold, gapY1, px4, py2, roundedLg, textLg, textWhite, textXl, textZinc400 } from "@/style";
import { Text, View } from "react-native";

export interface InformacaoProps{
    label: string;
    children: any;
}

export default function Informacao(props: InformacaoProps){
    return(
        <View style={[px4, py2, gapY1, roundedLg, border, borderZinc800]}>
            <Text style={[textXl, fontBold, textWhite]}>{props.label}</Text>
            <Text style={[textLg, textZinc400]}>{props.children}</Text>
        </View>
    );
}