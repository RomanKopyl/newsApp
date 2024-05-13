
import React, { useMemo, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ARTICLES } from '../../constant';
import { Article } from '../../models/Article';
import { ArticleList } from './ArticleList';
import { SearchView } from './SearchView';


export const HomeScreen: React.FC = () => {
    const [searchValue, setSearchValue] = useState('');
    const [articleList, setArticleList] = useState<Article[] | undefined>(ARTICLES);

    const filteredList = useMemo(() => {
        if (searchValue.length === 0) return articleList;

        const list: Article[] = [...(articleList ?? [])].filter(item => {
            const isTitleIncludes = item.title?.includes(searchValue);
            if (isTitleIncludes) return true;

            const isTextIncludes = item.text?.includes(searchValue);
            return isTextIncludes;
        });

        return list;
    }, [searchValue]);


    const onChangeFilterText = (value: string) => {
        console.log(value);

        setSearchValue(value);
    };

    return (
        <SafeAreaView style={styles.container}>

            <SearchView
                value={searchValue}
                onChangeValue={onChangeFilterText}
            />

            <ArticleList articleList={filteredList} />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 30,
    },
});