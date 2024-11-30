import { border, borderZinc800, gapY2, px4, py2, roundedMd, textLg, textSm, textWhite, textZinc400 } from "@/style";
import { Convidado } from "core";
import { Text, View } from "react-native";

export interface ListaConvidadosProps{
    convidados: Convidado[];
}

export default function ListaConvidados(props: ListaConvidadosProps){
    return(
        <View>
            {props.convidados && props.convidados.length > 0 ? (
                <View style={gapY2}>
                    {props.convidados.map((convidado) => (
                        <View 
                            key={convidado.id} 
                            style={[border, borderZinc800, roundedMd, px4, py2]}
                        >
                            <Text style={[textWhite, textLg]}>{convidado.nome}</Text>
                            <Text style={[textZinc400, textSm]}>{convidado.email}</Text>
                        </View>
                    ))}
                </View>
            ) : (
                <Text style={[textZinc400, textLg]}>Ninguém por aqui ainda...</Text>
            )}
        </View>
    )
}