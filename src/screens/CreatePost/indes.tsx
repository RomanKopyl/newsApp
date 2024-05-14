import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, TextInput } from 'react-native';
import Header from '../../components/Header';
import { RootStackParamList } from '../../navigation/RootNavigator';
import Button from '../../components/Button';

type Props = NativeStackScreenProps<RootStackParamList, 'CreateScreen'>;

const CreateScreen: React.FC<Props> = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [link, setLink] = useState('');
    const [text, setText] = useState('');


    const onChangeTitle = (value: string) => {
        setTitle(value);
    }

    const onChangeImageUrl = (value: string) => {
        setImageUrl(value);
    }

    const onChangeLink = (value: string) => {
        setLink(value);
    }

    const onChangeText = (value: string) => {
        setText(value);
    }

    const onPressPublic = () => {
        console.log('PUBLIC');
        navigation.goBack();
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Header title='New post' />

                <TextInput
                    style={styles.input}
                    placeholder='Title*'
                    onChangeText={onChangeTitle}
                    value={title}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Image url'
                    onChangeText={onChangeImageUrl}
                    value={imageUrl}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Link'
                    onChangeText={onChangeLink}
                    value={link}
                />

                <TextInput
                    numberOfLines={7}
                    multiline={true}
                    style={{
                        ...styles.input,
                        ...styles.messageInput,
                    }}
                    placeholder='Type  your message here..*'
                    onChangeText={onChangeText}
                    value={text}
                />
            </ScrollView>

            <Button
                style={{ marginTop: 'auto' }}
                title='Public'
                onPress={onPressPublic}
            />
        </SafeAreaView>
    )
}

export default CreateScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get('window').height,
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        paddingTop: 30,
        paddingBottom: 50,
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
    input: {
        backgroundColor: 'rgba(164, 169, 174, 0.15)',
        borderRadius: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 30,
        paddingVertical: 18,
        marginTop: 25,
    },
    messageInput: {
        height: 153,
        lineHeight: 25,
        textAlignVertical: 'top',
        marginBottom: 25,
    },
})