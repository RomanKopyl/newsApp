

import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import { RootStackParamList } from '../navigation/RootNavigator';
import { timeConverter } from '../utils/helper';
import { StackScreenProps } from '@react-navigation/stack';


type Props = StackScreenProps<RootStackParamList, 'PostScreen'>;

export const PostScreen: React.FC<Props> = ({ route }) => {
    const post = route.params?.post;
    console.log(post?.createdAt);


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Header
                    style={styles.header}
                    title={post?.title}
                />
            </View>
            {
                post?.imageUrl &&
                <Image
                    source={{ uri: post?.imageUrl }}
                    style={styles.image}
                />
            }
            <View style={styles.textContainer}>
                {
                    post?.createdAt &&
                    <Text style={styles.date}>
                        {timeConverter(post?.createdAt)}
                    </Text>
                }
                <Text style={styles.message}>
                    {post?.message}
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        paddingHorizontal: 23,
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    header: {
        height: 90,
    },
    image: {
        width: '100%',
        height: 470,
        objectFit: 'cover',
        position: 'absolute',
        zIndex: -10,
    },
    textContainer: {
        paddingHorizontal: 30,
        paddingVertical: 26,
        marginTop: 319,
        backgroundColor: 'rgba(252, 252, 252, 1)',
        height: '100%',
        borderRadius: 40,
    },
    date: {
        fontSize: 12,
        fontWeight: '200',
        color: 'rgba(46, 5, 5, 1)',
    },
    message: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '300',
        marginTop: 15,
        color: 'rgba(0, 0, 0, 1)',
    },
});