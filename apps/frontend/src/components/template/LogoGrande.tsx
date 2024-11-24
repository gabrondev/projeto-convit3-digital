import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const fonte = Righteous({
    subsets: ["latin"],
    weight: "400",
});

export default function LogoGrande(){
    return(
        <Link href="/" className={`flex flex-col items-center gap-2 ${fonte.className}`}>
            <Image src="/logo.svg" width={100} height={100} alt="Logo"/>
            <h1 className="text-5xl">
                CONVIT<span className="text-blue-500">3</span> DIGITAL
            </h1>
        </Link>
    );
}