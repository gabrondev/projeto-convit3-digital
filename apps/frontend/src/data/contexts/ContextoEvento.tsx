"use client";
import { Convidado, criarConvidadoVazio, criarEventoVazio, Data, Evento } from "core";
import { createContext, useCallback, useEffect, useState } from "react";
import useAPI from "../hooks/useAPI";
import { useRouter } from "next/navigation";

export interface ContextoEventoProps{
    evento: Partial<Evento>;
    convidado: Partial<Convidado>;
    aliasValido: boolean;

    alterarEvento(evento: Partial<Evento>): void;
    alterarConvidado(convidado: Partial<Convidado>): void;

    carregarEvento(idOuAlias: string): Promise<void>;
    salvarEvento(): Promise<void>;

    adicionarConvidado(): void;
}

const ContextoEvento = createContext<ContextoEventoProps>({} as any);

export function ProvedorContextoEvento(props: any){
    const{ httpGet, httpPost } = useAPI();
    const router = useRouter();

    const [aliasValido, setAliasValido] = useState(true);
    const [evento, setEvento] = useState<Partial<Evento>>(criarEventoVazio());
    const [convidado, setConvidado] = useState<Partial<Convidado>>(criarConvidadoVazio());

    const salvarEvento = useCallback(
        async function salvarEvento(){
            try{
                const eventoCriado = await httpPost("/eventos/", evento);
                router.push("/eventos/sucesso");
                setEvento({
                    ...eventoCriado,
                    data: Data.desformatar(eventoCriado.data),
                })
            } catch(error){
                // TODO: Implementar tratamento de erro
                console.error(error);
            }
        }, [evento, httpPost, router]
    );

    const carregarEvento = useCallback(async function(idOuAlias: string){
        try{
            const evento = await httpGet(`/eventos/${idOuAlias}`);
            setEvento({
                ...evento,
                data: Data.desformatar(evento.data),
            });
        } catch(error){
            console.error(error);
        }
    }, [httpGet, setEvento]);

    const adicionarConvidado = useCallback(async function() {
        await httpPost(`/eventos/${evento.alias}/convidado/`, convidado);
        router.push("/convite/obrigado");
    }, [httpPost, evento, convidado, router]);

    const validarAlias = useCallback(async function(){
        try{
            const{ valido } = await httpGet(`/eventos/validar/${evento.alias}/${evento.id}`);
            setAliasValido(valido);
        } catch(error) {
            console.error(error);
        }
    }, [httpGet, evento]);

    useEffect(() => {
        if(evento?.alias) validarAlias();
    }, [evento?.alias, validarAlias])

    return(
        <ContextoEvento.Provider value={{
            evento,
            convidado,
            aliasValido,
            alterarEvento: setEvento,
            alterarConvidado: setConvidado,
            salvarEvento,
            carregarEvento,
            adicionarConvidado,
        }}>
            {props.children}
        </ContextoEvento.Provider>
    )
}

export default ContextoEvento;