import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { DataProvider } from '../dataContext';
import { Post } from "../models";
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


export const RootNavigator: React.FC = () => {

    return (
        <DataProvider>
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
        </DataProvider>
    );
};
