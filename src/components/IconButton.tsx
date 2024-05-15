import React from 'react'
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'

interface Props {
    style?: ViewStyle
    icon: React.ReactElement
    onPress?: () => void
}

const IconButton: React.FC<Props> = ({ icon, onPress, style }) => {
    return (
        <TouchableOpacity
            style={[styles.container, style]}
            onPress={onPress}
        >
            {
                icon
            }
        </TouchableOpacity>
    )
}

export default IconButton

const styles = StyleSheet.create({
    container: {
        width: 47,
        height: 47,
        backgroundColor: 'rgba(164, 169, 174, 0.15)',
        borderRadius: 23.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
})