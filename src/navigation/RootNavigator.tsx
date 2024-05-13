import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { HomeScreen } from "../screens/HomeScreen";
import { ArticleScreen } from "../screens/ArticleScreen";



export type RootStackParamList = {
    HomeScreen: undefined,
    ArticleScreen: undefined,
    // ImageScreen: { imageId: string } | undefined,
};
export type StackNavigation = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();


export const RootNavigator: React.FC = () => {

    useEffect(() => {
    }, []);

    return (
        <Stack.Navigator initialRouteName={'HomeScreen'}>
            <Stack.Screen
                name={'HomeScreen'}
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={'ArticleScreen'}
                component={ArticleScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
