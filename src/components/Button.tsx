import React from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import { ButtonType } from '../models'

interface Props {
    title: string
    style?: ViewStyle
    onPress?: () => void
    type?: ButtonType
    isLoading?: boolean
    disabled?: boolean
}

const getColor = (type: ButtonType) => {
    switch (type) {
        case ButtonType.action:
            return 'rgba(69, 110, 254, 1)';
        case ButtonType.delete:
            return 'rgba(255, 99, 99, 1)';

        default:
            return 'rgba(69, 110, 254, 1)';
    }
}

const Button: React.FC<Props> = ({
    type = ButtonType.action,
    title,
    onPress,
    style,
    isLoading = false,
    disabled = false,
}) => {
    const color = getColor(type);

    return (
        <TouchableOpacity
            style={{
                width: '100%',
                backgroundColor: color,
                opacity: (disabled || isLoading) ? 0.5 : 1,
                ...styles.container,
                ...style,
            }}
            disabled={disabled || isLoading}
            onPress={onPress}
        >
            <Text style={styles.textButton}>{title}</Text>
            {
                isLoading &&
                <ActivityIndicator
                    color={'white'}
                    style={styles.activityIndicator} />
            }
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        height: 63,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontSize: 24,
        fontWeight: '700',
        color: 'rgba(255, 255, 255, 1)',
    },
    activityIndicator: {
        position: 'absolute',
        right: 18,
    },
})