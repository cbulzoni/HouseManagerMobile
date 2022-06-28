import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { AppliancesScreen } from "./src/features/appliances/screens/appliances.screen";

export default function App() {
  return (
    <>
      <AppliancesScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
