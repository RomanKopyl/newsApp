

import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import { EmptyListImage } from '../../../res';
import { Post } from '../../models';
import { StackNavigation } from '../../navigation/RootNavigator';
import PostItem from './PostItem';

interface Props {
    postList?: Post[]
}

export const PostList: React.FC<Props> = ({ postList }) => {
    const navigation = useNavigation<StackNavigation>();
    const [isLoading, setIsLoading] = useState(false);

    const onPressPost = (item: Post) => {
        navigation.navigate('PostScreen', { post: item });
    };


    const onLongPressButton = (item: Post) => {
        if (!item?.id) {
            console.log('Id is undefined');
            Alert.alert('Are you sure?');
            return;
        }
        navigation.navigate('ModalScreen', { postId: item?.id });
    }

    const renderItem = ({ item, index }: { item: Post, index: number }) => {
        return (
            <PostItem
                post={item}
                onPress={() => onPressPost(item)}
                onLongPress={() => onLongPressButton(item)}
            />
        );
    }

    //  Empty list placeholder 
    if (!postList || postList?.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <EmptyListImage />
                <Text style={styles.textPlaceholder}>No results found</Text>
            </View>
        );
    }

    if (isLoading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
            }}>
                <ActivityIndicator size={'large'} />
            </View>
        )
    }

    return (
        <FlatList
            data={postList}
            renderItem={renderItem}
        />
    );
};

const styles = StyleSheet.create({
    emptyContainer: {
        marginVertical: 'auto',
        alignItems: 'center',
    },
    textPlaceholder: {
        marginTop: 29,
        color: 'rgba(164, 169, 174, 1)',
        fontSize: 16,
        fontWeight: '400',
    },
});