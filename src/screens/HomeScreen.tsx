
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AddIcon, EmptyListImage, SearchIcon } from '../../res';
import { RootStackParamList } from '../navigation/RootNavigator';


type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const [searchValue, setSearchValue] = useState('');


    const onChangeText = (value: string) => {
        setSearchValue(value);
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#fff',
            paddingHorizontal: 30,
        }}>
            <View style={{
                flexDirection: 'row',
                marginTop: 30,
                alignItems: 'center',
            }}>
                <View style={{
                    flexDirection: 'row',
                    flex: 1,
                    minHeight: 48,
                    backgroundColor: 'rgba(164, 169, 174, 0.15)',
                    borderRadius: 10,
                    alignItems: 'center',
                    paddingHorizontal: 14,
                }}>
                    <SearchIcon />

                    <TextInput
                        placeholder='Search'
                        onChangeText={onChangeText}
                        value={searchValue}
                        style={{
                            marginLeft: 10,
                        }}
                    />
                </View>
                <View style={{
                    width: 47,
                    height: 47,
                    backgroundColor: 'rgba(164, 169, 174, 0.15)',
                    borderRadius: 23.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 10,
                }}>
                    <AddIcon />
                </View>
            </View>
            <EmptyListImage style={{ marginVertical: 'auto' }} />

            <TouchableOpacity
                style={{
                    backgroundColor: 'gray',
                    marginTop: 20,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    borderRadius: 10
                }}
                onPress={() => navigation.navigate('ArticleScreen')}
            >
                <Text>Go to Article</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
});