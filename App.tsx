import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { RootNavigator } from "./src/navigation/RootNavigator";
import { DataProvider } from "./src/dataContext";

function App(): React.JSX.Element {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <DataProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </DataProvider>
  );
}

export default App;