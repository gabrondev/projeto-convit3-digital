"use client";
import { useState } from "react";

export interface PassosProps{
    labels: string[];
    labelAcao: string;
    permiteProximoPasso?: boolean[];
    acao: () => void;
    children: any;
}

export default function Passos(props: PassosProps){
    const [passoAtual, setPassoAtual] = useState(0);

    function semPassoAnterior(){
        return passoAtual === 0;
    }

    function semProximoPasso(){
        return passoAtual === props.labels.length - 1;
    }

    function passoAnterior(){
        if(semPassoAnterior()) return;
        setPassoAtual(passoAtual - 1);
    }

    function proximoPasso(){
        if(semProximoPasso()) return;
        setPassoAtual(passoAtual + 1);
    }

    function renderizarLabels(){
        return(
            <div className="flex gap-4 select-none">
                {props.labels.map((label, i) => {
                    const selecionado = passoAtual === i;
                    return (
                        <div key={i} className="flex items-center gap-2">
                            <span
                                className={
                                    `
                                    flex items-center justify-center
                                    w-9 h-9 rounded-full
                                    ${selecionado ? "bg-white text-black" : "bg-zinc-700 text-zinc-400"}
                                    `
                                }
                            >{i + 1}</span>
                            <span className={selecionado ? "text-white" : "text-zinc-600"}>{label}</span>
                        </div>
                    )
                })}
            </div>
        )
    }

    const permiteProximoPasso = props.permiteProximoPasso?.[passoAtual] ?? true;

    return (
        <div className="flex-1 flex flex-col gap-10 w-full">
            <div className="self-center">{renderizarLabels()}</div>
            <div>{props.children[passoAtual]}</div>
            <div className="flex justify-between">
                <button 
                    onClick={passoAnterior} 
                    className={`
                        botao
                        ${
                            semPassoAnterior() 
                            ? "bg-zinc-400 cursor-not-allowed opacity-50" 
                            : "bg-zinc-700 hover:bg-zinc-600 text-white"
                        }
                    `}
                    disabled={semPassoAnterior()}
                >
                    <span>Anterior</span>
                </button>
                {
                semProximoPasso() 
                    ? 
                        (
                        <button 
                            onClick={props.acao}
                            disabled={!permiteProximoPasso}
                            className={`
                                botao
                                bg-green-700 hover:bg-green-600 text-white
                                ${
                                    !permiteProximoPasso
                                    ? "bg-zinc-400 cursor-not-allowed opacity-50"
                                    : "bg-green-700 hover:bg-green-600 text-white"
                                }
                            `}
                        >
                            <span>{props.labelAcao}</span>
                        </button>
                        ) 
                    :
                        (
                        <button 
                            onClick={proximoPasso} 
                            className={`
                                botao
                                ${
                                    !permiteProximoPasso || semProximoPasso() 
                                    ? "bg-zinc-400 cursor-not-allowed opacity-50" 
                                    : "bg-green-700 hover:bg-green-600 text-white"
                                }
                            `}
                            disabled={!permiteProximoPasso || semProximoPasso()}
                        >
                            <span>Próximo</span>
                        </button>
                        )
                }

            </div>
        </div>
    );
}