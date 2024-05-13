import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { postImage } from '../../../res'
import { Post } from '../../models/Post'

interface Props {
    post: Post
    style?: ViewStyle
    onPress?: () => void
}

const PostView = ({ post, style, onPress }: Props) => {
    return (
        <TouchableOpacity
            style={{ ...styles.container, ...(style ?? []) }}
            onPress={onPress}
        >
            <Image
                source={postImage}
                style={styles.image}
            />

            <View style={styles.textContainer}>

                <Text style={styles.title}>{post.title}</Text>

                <Text
                    numberOfLines={1}
                    style={styles.text}
                >
                    {post.text}
                </Text>

                <Text style={styles.date}>{post.createdAt}</Text>

            </View>
        </TouchableOpacity>
    )
}

export default PostView;

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
        paddingHorizontal: 18
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: 'rgba(0, 0, 0, 1)',
    },
    text: {
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