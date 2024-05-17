import { zodResolver } from '@hookform/resolvers/zod';
import firestore from '@react-native-firebase/firestore';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';
import { z } from 'zod';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import Header from '../../components/Header';
import { showError } from '../../helper';
import { Post } from '../../models';
import { RootStackParamList } from '../../navigation/RootNavigator';

const formSchema = z.object({
    title: z.string()
        .min(3, 'Title must be at least 3 characters')
        .max(30, 'Title must be maximum 30 characters'),
    imageUrl: z.string().url('Please enter a valid imageUrl'),
    link: z.string().url('Please enter a valid imageUrl'),
    message: z.string().min(8, 'Message must be at least 8 characters'),
});

export interface FormInterface {
    title: string;
    imageUrl: string;
    link: string;
    message: string;
}

type Props = StackScreenProps<RootStackParamList, 'CreateScreen'>;

const CreateScreen: React.FC<Props> = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);

    const { control, handleSubmit } = useForm<FormInterface>({
        defaultValues: {
            title: '',
            imageUrl: '',
            link: '',
            message: '',
        },
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: FormInterface) => {
        const postId = uuid.v4();

        const newPost: Post = {
            id: postId.toString(),
            title: data.title,
            message: data.message,
            createdAt: (new Date()).toISOString(),
            link: data.link,
            imageUrl: data.imageUrl,
        };

        setIsLoading(true);
        firestore().collection('posts')
            .doc(postId.toString())
            .set(newPost)
            .then(() => {
                navigation.goBack();
            })
            .catch(error => showError(error))
            .finally(() => setIsLoading(false));
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.formContainer}>
                <Header title={'New post'} />

                <FormInput
                    control={control}
                    name={'title'}
                    placeholder='Title*'
                />

                <FormInput
                    control={control}
                    name={'imageUrl'}
                    placeholder='Image url'
                />

                <FormInput
                    control={control}
                    name={'link'}
                    placeholder='Link'
                />

                <FormInput
                    control={control}
                    name={'message'}
                    numberOfLines={7}
                    multiline={true}
                    style={styles.messageInput}
                    placeholder='Type  your message here..*'
                />

            </ScrollView>

            <Button
                style={{ marginTop: 'auto' }}
                title='Public'
                isLoading={isLoading}
                onPress={handleSubmit(onSubmit)}
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
    formContainer: {
        marginBottom: 25,
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
    messageInput: {
        height: 153,
        lineHeight: 25,
        textAlignVertical: 'top',
    },
})