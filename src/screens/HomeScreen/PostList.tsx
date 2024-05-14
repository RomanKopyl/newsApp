
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { EmptyListImage } from '../../../res';
import { Post } from '../../models';
import { StackNavigation } from '../../navigation/RootNavigator';
import PostItem from './PostItem';


interface Props {
    postList?: Post[]
}

export const PostList: React.FC<Props> = ({ postList }) => {
    const navigation = useNavigation<StackNavigation>();

    const onPressPost = (item: Post) => {
        navigation.navigate('PostScreen', { post: item });
    };

    const renderItem = ({ item, index }: { item: Post, index: number }) => {
        return (
            <PostItem
                post={item}
                onPress={() => onPressPost(item)}
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