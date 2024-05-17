import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import { BackIcon } from '../../res'
import IconButton from './IconButton'

interface Props {
    title?: string
    style?: ViewStyle
}

const CreateScreen: React.FC<Props> = ({ title, style }) => {
    const navigation = useNavigation();

    const onPressBack = () => {
        navigation.goBack();
    }

    return (
        <View style={{ ...styles.container, ...style }}>
            <View style={styles.backButton}>
                <IconButton
                    icon={<BackIcon />}
                    onPress={onPressBack}
                />
            </View>
            {
                title &&
                <Text style={styles.headerText}>{title}</Text>
            }
        </View>
    );
}

export default CreateScreen

const styles = StyleSheet.create({
    container: {
        minHeight: 49,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingHorizontal: 45
    },
    backButton: {
        position: 'absolute',
        left: 0,
    },
    headerText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'rgba(35, 48, 59, 1)',
        textAlign: 'center',
    },
})