import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { RootNavigator } from "./src/navigation/RootNavigator";

function App(): React.JSX.Element {
  
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
  );
}

export default App;