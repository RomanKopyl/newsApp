
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { AddIcon, SearchIcon } from '../../../res';
import IconButton from '../../components/IconButton';
import { StackNavigation } from '../../navigation/RootNavigator';
import { useNavigation } from '@react-navigation/native';


interface Props {
    value?: string
    onChangeValue?: (value: string) => void
}

export const SearchView: React.FC<Props> = ({ value, onChangeValue }) => {
    const navigation = useNavigation<StackNavigation>();

    const goToCreatePost = () => {
        navigation.navigate('CreateScreen');
    };

    return (
        <View style={styles.container}>
            <SearchIcon style={{
                position: 'absolute',
                left: 44,
                top: 11,
            }} />

            <TextInput
                style={styles.searchInput}
                placeholder='Search'
                onChangeText={onChangeValue}
                value={value}
            />

            <IconButton
                style={styles.addButton}
                icon={<AddIcon />}
                onPress={goToCreatePost}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        paddingHorizontal: 30,
        paddingBottom: 10,
    },
    searchInput: {
        flexDirection: 'row',
        flex: 1,
        minHeight: 48,
        backgroundColor: 'rgba(164, 169, 174, 0.15)',
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingLeft: 48,
        zIndex: 10,
    },
    addButton: {
        marginLeft: 10,
    },
});