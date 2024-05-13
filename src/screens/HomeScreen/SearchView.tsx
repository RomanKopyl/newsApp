
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { AddIcon, SearchIcon } from '../../../res';


interface Props {
    value?: string
    onChangeValue?: (value: string) => void
}

export const SearchView: React.FC<Props> = ({ value, onChangeValue }) => {

    return (
        <View style={styles.container}>
            <SearchIcon style={{
                position: 'absolute',
                left: 14,
                top: 11,
            }} />

            <TextInput
                style={styles.searchInput}
                placeholder='Search'
                onChangeText={onChangeValue}
                value={value}
            />

            <View style={styles.addButton}>
                <AddIcon />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center',
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
        width: 47,
        height: 47,
        backgroundColor: 'rgba(164, 169, 174, 0.15)',
        borderRadius: 23.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
});