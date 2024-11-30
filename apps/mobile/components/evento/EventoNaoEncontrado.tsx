import { bgBlack, centerGrow, textWhite } from "@/style";
import { Text, View } from "react-native";

export default function EventoNaoEncontrado() {
    return(
        <View style={[centerGrow, bgBlack]}>
            <Text style={[textWhite]}>
                Evento não encontrado.
            </Text>
        </View>
    );
}