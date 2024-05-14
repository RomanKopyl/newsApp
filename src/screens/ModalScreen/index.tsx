import firestore from '@react-native-firebase/firestore';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from 'react-native';
import Button from '../../components/Button';
import { ButtonType } from '../../models';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { showError, showMessage } from '../../helper';

type Props = StackScreenProps<RootStackParamList, 'ModalScreen'>;

const ModalScreen: React.FC<Props> = ({ navigation, route }) => {
    const [isLoading, setIsLoading] = useState(false);

    const postId = route.params?.postId;

    const onPressClose = () => navigation.goBack();

    const onPressOk = () => {
        firestore()
            .collection('posts')
            .doc(postId)
            .delete()
            .then(() => {
                console.log('Post deleted!', postId);
                navigation.goBack();
            })
            .catch(error => showError(error))
            .finally(() => setIsLoading(false));
    };
    const onPressDelete = () => {
        showMessage({
            message: 'Are you sure?',
            onPressOk,
            onPressCancel: () => { }
        });
    };

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPressClose}
        >
            {
                isLoading &&
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator size={'large'} />
                </View>
            }

            <View style={styles.buttonContainer}>
                <Button
                    type={ButtonType.delete}
                    onPress={onPressDelete}
                    title="Delete" />
                <Button
                    style={styles.buttonGap}
                    onPress={onPressClose}
                    title="Close"
                />
            </View>
        </TouchableOpacity>
    );
}

export default ModalScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    activityIndicatorContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        height: 226,
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        paddingHorizontal: 33,
        paddingTop: 50,
        paddingBottom: 34,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    buttonGap: {
        marginTop: 16,
    },
})