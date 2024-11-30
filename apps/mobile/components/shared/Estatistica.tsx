import { bgZinc900, flex1, fontBlack, gapY2, itemsCenter, p4, px4, roundedLg, text2Xl, textCenter, textWhite, textZinc400 } from "@/style";
import { Image, Text, View } from "react-native";

export interface EstatisticaProps{
    texto: string;
    valor: any;
    imagem: any;
}

export default function Estatistica(props: EstatisticaProps){
    return(
        <View style={[flex1, itemsCenter, bgZinc900, p4, roundedLg]}>
            <Image source={props.imagem} style={{ width: 80, height: 80, marginTop: -40 }}/>
            <View style={[itemsCenter, gapY2]}>
                <Text style={[textZinc400, textCenter]}>{props.texto}</Text>
                <Text style={[textWhite, text2Xl, fontBlack]}>{props.valor}</Text>
            </View>
        </View>
    )
}