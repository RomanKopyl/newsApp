
import React, { useMemo, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { POSTS } from '../../constant';
import { Post } from '../../models';
import { PostList } from './PostList';
import { SearchView } from './SearchView';


export const HomeScreen: React.FC = () => {
    const [searchValue, setSearchValue] = useState('');
    const [postList, setPostList] = useState<Post[] | undefined>(POSTS);

    const filteredList = useMemo(() => {
        if (searchValue.length === 0) return postList;

        const list: Post[] = [...(postList ?? [])].filter(item => {
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

            <PostList postList={filteredList} />

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