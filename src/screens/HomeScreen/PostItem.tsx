import React from 'react'
import { GestureResponderEvent, Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { Post } from '../../models'
import { timeConverter } from '../../utils/helper'

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
            style={{ ...styles.container, ...(style ?? []) }}
            onPress={onPress}
            onLongPress={onLongPress}
        >
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
        </TouchableOpacity>
    )
}

export default PostItem;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'rgba(110, 117, 136, 0.07)',
        justifyContent: 'flex-start',
        paddingBottom: 19,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop: 40,
    },
    image: {
        width: '100%',
        height: 196,
        objectFit: 'contain'
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