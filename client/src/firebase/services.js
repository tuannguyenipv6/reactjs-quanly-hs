import { addDoc, collection, deleteDoc, doc, serverTimestamp  } from "firebase/firestore"; 
import { db } from "./config";

export const addDocument = (collect, data) => {
    addDoc(collection(db, collect), {
        ...data,
        createdAt: serverTimestamp(),
    });
}

export const deleteDocument = (collect, id) => {
    deleteDoc(doc(db, collect, id));
}