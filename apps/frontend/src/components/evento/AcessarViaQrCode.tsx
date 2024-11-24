import { Evento } from "core"
import QRCode from "react-qr-code"

export interface AcessarViaQrCodeProps {
    evento: Evento
}

export default function AcessarViaQrCode(props: AcessarViaQrCodeProps) {
    return(
        <div className="flex flex-col items-center justify-center gap-4 border border-zinc-800 px-10">
            <span className="text-sm font-light text-zinc-400">Acesse via mobile</span>
            <QRCode
                value={JSON.stringify({
                    id: props.evento.id,
                    senha: props.evento.senha,
                })}
                className="w-32 h-32"
            />
        </div>
    )
}