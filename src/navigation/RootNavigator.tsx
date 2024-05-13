import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import CreateScreen from "../screens/CreatePost/indes";
import { HomeScreen } from "../screens/HomeScreen";
import { PostScreen } from "../screens/PostScreen";



export type RootStackParamList = {
    HomeScreen: undefined,
    PostScreen: undefined,
    CreateScreen: undefined,
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
                name={'PostScreen'}
                component={PostScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={'CreateScreen'}
                component={CreateScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
