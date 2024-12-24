import React from "react";
import { View, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MasterLayout from "./Layout/MaserLayout";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { useFonts, Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListProductDetails from "./Components/ListProductDetails";
import ProductDetails from "./Pages/ProductDetails";

// Define a custom theme with the Roboto font
const theme = {
  ...DefaultTheme,
  fonts: {
    regular: {
      fontFamily: "Roboto_400Regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "Roboto_500Medium",
      fontWeight: "normal",
    },
  },
};
const Stack = createStackNavigator();
const App = () => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider  theme={theme}>
      {/* Wrap the entire app in PaperProvider for theming */}
      <PaperProvider>
      <View style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" />
          <NavigationContainer>
            <MasterLayout />
          </NavigationContainer>
        </View>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
