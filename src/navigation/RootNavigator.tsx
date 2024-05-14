import firestore from '@react-native-firebase/firestore';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createContext, useEffect, useState } from "react";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { Data, Post } from "../models";
import CreateScreen from "../screens/CreatePost/indes";
import { HomeScreen } from "../screens/HomeScreen";
import { PostScreen } from "../screens/PostScreen";


export type RootStackParamList = {
    HomeScreen: undefined,
    PostScreen: { post: Post } | undefined,
    CreateScreen: undefined,
    // ImageScreen: { imageId: string } | undefined,
};
export type StackNavigation = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const DataContext = createContext<Data | undefined>(undefined);


export const RootNavigator: React.FC = () => {
    const [data, setData] = useState<Data | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const subscriber = firestore()
            .collection('posts')
            .onSnapshot(querySnapshot => {
                const posts: Post[] = [];

                if (!querySnapshot) {
                    console.log('Collection is null');
                    return;
                }

                querySnapshot.forEach(documentSnapshot => {
                    posts.push({
                        ...documentSnapshot.data(),
                        id: documentSnapshot.id,
                    });
                });

                setData({ posts: posts });
                console.log('POSTS', posts.length);

                setLoading(false);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);

    return (
        <DataContext.Provider value={data}>
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
        </DataContext.Provider>
    );
};
