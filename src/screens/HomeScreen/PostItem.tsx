import React from 'react'
import { GestureResponderEvent, Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { timeConverter } from '../../helper'
import { Post } from '../../models'

interface Props {
    post: Post
    style?: ViewStyle
    onPress?: () => void
    onLongPress?: (event: GestureResponderEvent) => void
}

const PostItem = ({
    post,
    style,
    onPress,
    onLongPress,
}: Props) => {

    return (
        <TouchableOpacity
            style={[styles.container, style]}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <View style={[styles.content]}>
                {
                    post.imageUrl &&
                    <Image
                        source={{ uri: post.imageUrl }}
                        style={styles.image}
                    />
                }
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{post.title}</Text>
                    <Text
                        numberOfLines={1}
                        style={styles.message}
                    >
                        {post.message}
                    </Text>
                    {
                        post?.createdAt &&
                        <Text style={styles.date}>
                            {timeConverter(post?.createdAt)}
                        </Text>
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default PostItem;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 30,
    },
    content: {
        backgroundColor: 'rgba(110, 117, 136, 0.07)',
        justifyContent: 'flex-start',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingBottom: 19,
    },
    image: {
        height: 196,
        objectFit: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textContainer: {
        paddingHorizontal: 18,
        marginTop: 18,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: 'rgba(0, 0, 0, 1)',
    },
    message: {
        fontSize: 16,
        fontWeight: '300',
        color: 'rgba(0, 0, 0, 1)',
        marginTop: 10,
    },
    date: {
        fontSize: 12,
        fontWeight: '200',
        color: 'rgba(142, 148, 154, 1)',
        marginTop: 5,
    },
});