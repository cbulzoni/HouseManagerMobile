import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { AppliancesScreen } from "./src/features/appliances/screens/appliances.screen";
import { SafeArea } from "./src/components/utility/safe-area.component";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Appliances: "microwave",
  Projects: "design-services",
  Contacts: "people",
};

const Projects = () => (
  <SafeArea>
    <Text>Projects</Text>
  </SafeArea>
);
const Contacts = () => (
  <SafeArea>
    <Text>Contacts</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <MaterialIcons name={iconName} size={size} color={color} />
    ),
  };
};

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Appliances" component={AppliancesScreen} />
            <Tab.Screen name="Projects" component={Projects} />
            <Tab.Screen name="Contacts" component={Contacts} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
