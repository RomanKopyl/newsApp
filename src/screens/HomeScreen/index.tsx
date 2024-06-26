
import React, { useContext, useMemo, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { PostList } from './PostList';
import { SearchView } from './SearchView';
import { DataContext } from '../../dataContext';


export const HomeScreen: React.FC = () => {
    const [searchValue, setSearchValue] = useState('');

    const data = useContext(DataContext);

    const filteredList = useMemo(() => {
        const postList = data?.posts;

        if (searchValue.length === 0) return postList;

        const list = postList?.filter(item => {
            const isTitleIncludes = item.title?.includes(searchValue);
            if (isTitleIncludes) return true;

            const isMessageIncludes = item.message?.includes(searchValue);
            return isMessageIncludes;
        });

        return list;
    }, [searchValue, data]);


    const onChangeFilterText = (value: string) => {
        console.log(value);

        setSearchValue(value);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.page}>
                <SearchView
                    value={searchValue}
                    onChangeValue={onChangeFilterText}
                />

                <PostList
                    isLoading={data?.isLoading}
                    postList={filteredList}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    page: {
        flex: 1,
        // marginHorizontal: 30,
    }
});