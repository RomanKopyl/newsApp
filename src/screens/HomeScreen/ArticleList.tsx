
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { EmptyListImage } from '../../../res';
import { Article } from '../../models/Article';
import { StackNavigation } from '../../navigation/RootNavigator';
import ArticleView from './ArticleView';


interface PropsS {
    articleList?: Article[]
}

export const ArticleList: React.FC<PropsS> = ({ articleList }) => {
    const navigation = useNavigation<StackNavigation>();

    const onPressArticle = () => {
        navigation.navigate('ArticleScreen');
    };

    const renderItem = ({ item, index }: { item: Article, index: number }) => {
        return (
            <ArticleView
                article={item}
                onPress={onPressArticle}
            />
        );
    }

    //  Empty list placeholder 
    if (!articleList || articleList?.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <EmptyListImage />
                <Text style={styles.textPlaceholder}>No results found</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={articleList}
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