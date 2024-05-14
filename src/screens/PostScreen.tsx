
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../navigation/RootNavigator';
import Header from '../components/Header';


type Props = NativeStackScreenProps<RootStackParamList, 'PostScreen'>;

export const PostScreen: React.FC<Props> = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <Header
                style={styles.header}
                title='Post Screen'
            />

            <TouchableOpacity
                style={{
                    backgroundColor: 'gray',
                    marginTop: 20,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    borderRadius: 10
                }}
                onPress={() => navigation.goBack()}
            >
                <Text style={{
                    fontSize: 20,
                }}>
                    Back
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginHorizontal: 23,
        marginTop: 22,
        // marginBottom: 21,
    }
});