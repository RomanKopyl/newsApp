
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

export const HomeScreen: React.FC<Props> = ({ navigation }) => {

    return (
        <SafeAreaView style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 30,
                backgroundColor: 'yellow'
            }}>
                Home screen
            </Text>
            <TouchableOpacity
                style={{ backgroundColor: 'gray',
                    marginTop: 20,
                    paddingHorizontal : 20,
                    paddingVertical: 10,
                    borderRadius: 10
                 }}
                onPress={() => navigation.navigate('ArticleScreen')}
            >
                <Text>Go to Image</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
});