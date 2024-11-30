import { useCallback } from "react";

const urlBase = process.env.NEXT_PUBLIC_API_URL;

export default function useAPI() {
  const httpGet = useCallback(async function (caminho: string) {
    const uri = caminho.startsWith("/") ? caminho : `/${caminho}`;
    const urlCompleta = `${urlBase}${uri}`;

    const resposta = await fetch(urlCompleta);
    return extrairDados(resposta);
  }, []);

  const httpPost = useCallback(async function (caminho: string, body?: any) {
    const uri = caminho.startsWith("/") ? caminho : `/${caminho}`;
    const urlCompleta = `${urlBase}${uri}`;

    const resposta = await fetch(urlCompleta, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });
    return extrairDados(resposta);
  }, []);

  async function extrairDados(reposta: Response) {
    let conteudo: any;

    try {
      conteudo = await reposta.json();
    } catch (error) {
      if (!reposta.ok) {
        throw new Error(
          `Ocorreu um erro inesperado com status ${reposta.status}.`
        );
      }
      return null;
    }
    if (!reposta.ok) throw conteudo;
    return conteudo;
  }

  return { httpGet, httpPost };
}
