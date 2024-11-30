import { ProvedorEventos } from "@/data/contexts/ContextoEventos";
import { colors } from "@/style/colors";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <ProvedorEventos>
    <Stack>
      <Stack.Screen 
        name="(tabs)" 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="(stack)/qrcode" 
        options={{
          headerShown: true,
          title: "Leitor de QRCode",
          headerBackTitle: "Voltar",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: colors.zinc[900],
          },
        }}
      />
      <Stack.Screen 
        name="(stack)/eventos/[id]" 
        options={{
          title: "Detalhes do Evento",
          headerBackTitle: "Voltar",
          headerTintColor: "white",
          headerStyle:{
            backgroundColor: colors.zinc[900],
          },
        }}
      />
    </Stack>
  </ProvedorEventos>
  );
}
