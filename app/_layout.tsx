import InitialLayout from "@/components/InitialLayout";
import ConvexWithClerkProvider from "@/providers/ConvexWithClerkProvider";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <ConvexWithClerkProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
            <InitialLayout />
        </SafeAreaView>
      </SafeAreaProvider>
    </ConvexWithClerkProvider>
  );
}
