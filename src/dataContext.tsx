import firestore from '@react-native-firebase/firestore';
import React, { ReactElement, createContext, useEffect, useState } from "react";
import { Data, Post } from "./models";

const DataContext = createContext<Data | undefined>(undefined);

const DataProvider = ({ children }: { children: ReactElement }) => {
    const [posts, setPosts] = useState<Post[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const subscriber = firestore()
            .collection('posts')
            .onSnapshot(querySnapshot => {
                const posts: Post[] = [];

                if (!querySnapshot) {
                    console.log('Collection is null');
                    return;
                }

                querySnapshot.forEach(documentSnapshot => {
                    posts.push({
                        ...documentSnapshot.data(),
                        id: documentSnapshot.id,
                    });
                });

                setPosts(posts);
                setIsLoading(false);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);

    return (
        <DataContext.Provider value={{ posts, isLoading }}>
            {
                children
            }
        </DataContext.Provider>
    )
}

export { DataContext, DataProvider };

