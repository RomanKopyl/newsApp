import firestore from '@react-native-firebase/firestore';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { createContext, useEffect, useState } from "react";
import { Data, Post } from "../models";
import CreateScreen from "../screens/CreatePost";
import { HomeScreen } from "../screens/HomeScreen";
import ModalScreen from '../screens/ModalScreen';
import { PostScreen } from "../screens/PostScreen";


export type RootStackParamList = {
    HomeScreen: undefined,
    PostScreen: { post: Post } | undefined,
    CreateScreen: undefined,
    ModalScreen: { postId: string } | undefined,
};
export type StackNavigation = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

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

                setLoading(false);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);

    return (
        <DataContext.Provider value={data}>
            <Stack.Navigator initialRouteName={'HomeScreen'} >

                <Stack.Group>
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
                </Stack.Group>

                <Stack.Group screenOptions={{
                    presentation: 'modal',
                    cardStyle: {
                        backgroundColor: 'transparent',
                        shadowColor: 'transparent'
                    },
                }}>
                    <Stack.Screen
                        name="ModalScreen"
                        component={ModalScreen}
                        options={{
                            headerShown: false,
                            detachPreviousScreen: false,
                        }}
                    />
                </Stack.Group>

            </Stack.Navigator>
        </DataContext.Provider>
    );
};
