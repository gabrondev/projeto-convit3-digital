import { gapY2 } from "@/style";
import { Evento } from "core";
import { View } from "react-native";
import Informacao from "../shared/Informacao";



export interface InformacoesEventoProps{
    evento: Evento;
}

export default function InformacoesEvento(props: InformacoesEventoProps){
    return(
        <View style={gapY2}>
            <Informacao label="Nome">{props.evento.nome}</Informacao>
            <Informacao label="Data">
                {new Date(props.evento.data).toLocaleDateString("pt-BR")}
                {' às '}
                {new Date(props.evento.data).toLocaleTimeString("pt-BR")}
            </Informacao>
            <Informacao label="Local">{props.evento.local}</Informacao>
            <Informacao label="Descrição">{props.evento.descricao}</Informacao>
        </View>
    )
};