import Logo from "@/components/template/Logo";
import { bgBlack, centerGrow, flex1 } from "@/style";
import { ImageBackground, Text, View } from "react-native";

export default function TelaInicio() {
  return (
    <ImageBackground 
      source={require("@/assets/images/background.png")}
      resizeMode="cover"
      style={[centerGrow, bgBlack]}
    >
      <Logo/>   
    </ImageBackground>
  );
}
