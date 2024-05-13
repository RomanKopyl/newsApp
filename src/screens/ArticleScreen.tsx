
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../navigation/RootNavigator';


type Props = NativeStackScreenProps<RootStackParamList, 'ArticleScreen'>;

export const ArticleScreen: React.FC<Props> = ({ navigation }) => {

    return (
        <SafeAreaView style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 30,
            }}>
                Article Screen
            </Text>
            <TouchableOpacity
                style={{
                    backgroundColor: 'gray' ,
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
});