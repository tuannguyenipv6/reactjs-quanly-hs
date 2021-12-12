import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";

const useFirestore = (collect, condition) => {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const citiesRef = collection(db, collect);
        const q = query(citiesRef, where(condition.fieldName, condition.operator, condition.compareValue), orderBy('createdAt'));
        const unsubscibe = onSnapshot(q, (querySnapshot) => {
            const cities = [];
            querySnapshot.forEach((doc) => {
                const newDoc = {
                    ...doc.data(),
                    id: doc.id,
                }
                cities.push(newDoc);
            });
            setDocuments(cities);
        });

        return unsubscibe;
    }, [collect, condition]);

    return documents;
}

export default useFirestore;