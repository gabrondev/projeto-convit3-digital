import EventoNaoEncontrado from "@/components/evento/EventoNaoEncontrado";
import InformacoesEvento from "@/components/evento/InformacoesEvento";
import ListaConvidados from "@/components/evento/ListaConvidados";
import Estatistica from "@/components/shared/Estatistica";
import TituloSecao from "@/components/shared/TituloSecao";
import useEventos from "@/data/hooks/useEventos";
import { bgBlack, bgRed500, button, flex1, flexRow, fontBold, gapX2, gapY4, p4, py4, py8, roundedLg, selfCenter, textWhite, w4_5, wFull } from "@/style";
import { AntDesign } from "@expo/vector-icons";
import { Convidado } from "core";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TelaDetalheEvento() {
    const { evento, selecionarEvento, excluirEvento } = useEventos();
    const params = useLocalSearchParams();
    const router = useRouter();

    useEffect(() => {
        selecionarEvento(params.id as string);
    }, [params.id]);

    const presentes = evento?.convidados?.filter((c: Convidado) => c.confirmado) ?? [];
    const ausentes = evento?.convidados?.filter((c: Convidado) => !c.confirmado) ?? [];
    const totalConvidados = 
        presentes.reduce((total, convidado) => {return total + convidado.qtdeAcompanhantes + 1;}, 0)

    return evento ? (
        <SafeAreaView style={[flex1, bgBlack, p4]}>
            <ScrollView contentContainerStyle={[gapY4, py4]}>
                <Image 
                    source={{ uri: evento.imagem }} 
                    style={[wFull, roundedLg, {height: 200}]}
                />
                <InformacoesEvento evento={evento}/>
                <View style={[flexRow, gapX2, { marginTop: 40 }]}>
                    <Estatistica
                        texto="Expectativa"
                        valor={evento.publicoEsperado}
                        imagem={require("@/assets/images/convidados.png")}
                    />
                    <Estatistica
                        texto="Confirmações"
                        valor={presentes.length}
                        imagem={require("@/assets/images/confirmados.png")}
                    />
                    <Estatistica
                        texto="Total"
                        valor={totalConvidados}
                        imagem={require("@/assets/images/acompanhantes.png")}
                    />
                </View>
                <TituloSecao texto="Presenças Confirmadas"/>
                <ListaConvidados convidados={presentes}/>

                <TituloSecao texto="Ausências Confirmadas"/>
                <ListaConvidados convidados={ausentes}/>

                <Pressable style={[button, bgRed500, w4_5, selfCenter]}
                    onPress={() => {
                        excluirEvento(evento.id);
                        router.back();
                    }}
                >
                    <AntDesign name="delete" size={20} color="white"/>
                    <Text style={[fontBold, textWhite]}>Excluir Evento</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    ) : (
        <EventoNaoEncontrado/>
    );
}