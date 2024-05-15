import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleProp, StyleSheet, Text, TextInput, TextInputProps, TextStyle } from 'react-native';
import { FormInterface } from '../screens/CreatePost';

interface Props {
    control?: Control<FormInterface>
    name: keyof FormInterface
    style?: StyleProp<TextStyle>
}

const FormInput: React.FC<Props & TextInputProps> = ({ control, name, style, ...otherProps }) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <>
                    <TextInput
                        style={[styles.input, style]}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        {...otherProps}
                    />
                    {error && <Text style={styles.errorMessage}>
                        {error.message}
                    </Text>
                    }
                </>
            )}
        />
    )
}

export default FormInput;

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'rgba(164, 169, 174, 0.15)',
        borderRadius: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 30,
        paddingVertical: 18,
        marginTop: 25,
    },
    errorMessage: {
        color: 'red',
    },
})