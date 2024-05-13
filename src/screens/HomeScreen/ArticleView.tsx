import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { articleImage } from '../../../res'
import { Article } from '../../models/Article'

interface Props {
    article: Article
    style?: ViewStyle
    onPress?: () => void
}

const ArticleView = ({ article, style, onPress }: Props) => {
    return (
        <TouchableOpacity
            style={{ ...styles.container, ...(style ?? []) }}
            onPress={onPress}
        >
            <Image
                source={articleImage}
                style={styles.image}
            />

            <View style={styles.textContainer}>

                <Text style={styles.title}>{article.title}</Text>

                <Text
                    numberOfLines={1}
                    style={styles.text}
                >
                    {article.text}
                </Text>

                <Text style={styles.date}>{article.createdAt}</Text>

            </View>
        </TouchableOpacity>
    )
}

export default ArticleView;

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