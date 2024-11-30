"use client";
import { useToast } from "@/data/hooks/useToast";
import { createContext, useCallback } from "react";

export interface ContextoMensagensProps {
  adicionarSucesso: (texto: string) => void;
  adicionarErro: (texto: string) => void;
}

const ContextoMensagens = createContext<ContextoMensagensProps>({} as any);

export function ProvedorContextoMensagens(props: any) {
  const { toast } = useToast();

  const adicionarMensagem = useCallback(
    function (tipo: "sucesso" | "erro", texto: string) {
      toast({
        title:
          tipo == "sucesso" ? "Tudo certo por aqui!" : "Ops, algo deu errado!",
        description: texto
          .split(/\n/)
          .map((linha) => <p key={linha}>{linha}</p>),
        variant: tipo == "sucesso" ? "default" : "destructive",
      });
    },
    [toast]
  );

  return (
    <ContextoMensagens.Provider
      value={{
        adicionarSucesso(texto) {
          adicionarMensagem("sucesso", texto);
        },
        adicionarErro(texto) {
          adicionarMensagem("erro", texto);
        },
      }}
    >
      {props.children}
    </ContextoMensagens.Provider>
  );
}

export default ContextoMensagens;
