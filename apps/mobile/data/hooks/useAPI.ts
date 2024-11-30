import { useCallback } from "react";

const urlBase = process.env.EXPO_PUBLIC_API_URL;

export default function useAPI(){
    const httpGet = useCallback(async function (caminho: string){
        const uri = caminho.startsWith("/") ? caminho : `/${caminho}`;
        const urlCompleta = `${urlBase}${uri}`;

        const resposta = await fetch(urlCompleta);
        return extrairDados(resposta);
    },[])

    const httpPost = useCallback(async function (caminho: string, body?: any){
        const uri = caminho.startsWith("/") ? caminho: `/${caminho}`;
        const urlCompleta = `${urlBase}${uri}`;

        const resposta = await fetch(urlCompleta, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: body ? JSON.stringify(body) : null,
        });
        return extrairDados(resposta);
    },[])

    async function extrairDados(resposta: Response){
        let conteudo: any

        try{
            conteudo = await resposta.json()
        } catch(error){
            if(!resposta.ok){
                throw new Error(`Ocorreu um erro inesperado com status ${resposta.status}`)
            }

            return null;
        }

        if(!resposta.ok) throw conteudo;
        return conteudo;
    }

    return { httpGet, httpPost};
}