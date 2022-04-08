import React, {useCallback, useEffect, useMemo, useState} from 'react';

export const CollectionContext = React.createContext(null);

const CollectionProvider = ({ children }) => {
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        const collectionString = localStorage.getItem('collection');
        if (collectionString) {
            const myCollection = JSON.parse(collectionString);
            setCollection(myCollection);
        } else {
            localStorage.setItem('collection', JSON.stringify([]));
        }
    }, []);

    const updateCollection = useCallback((newCollection) => {
        localStorage.setItem('collection', JSON.stringify(newCollection));
        setCollection(newCollection);
    }, []);

    const value = useMemo(() => {
        return {
            myCollection: collection,
            updateCollection,
        };
    }, [collection, updateCollection]);

    return <CollectionContext.Provider value={value}>{children}</CollectionContext.Provider>;
};

export default CollectionProvider;
