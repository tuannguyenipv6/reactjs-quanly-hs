import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCrvXt5A83cm3Y11AkCLEYIn31hvNMl1Ss',
    authDomain: 'quan-ly-student-chat-app.firebaseapp.com',
    projectId: 'quan-ly-student-chat-app',
    storageBucket: 'quan-ly-student-chat-app.appspot.com',
    messagingSenderId: '491823542439',
    appId: '1:491823542439:web:3ae6da48e14408b783eb82',
    measurementId: 'G-76HDNRXWB9'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);





































// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getDatabase } from 'firebase/database';

// const firebaseConfig = {
//     apiKey: 'AIzaSyCrvXt5A83cm3Y11AkCLEYIn31hvNMl1Ss',
//     authDomain: 'quan-ly-student-chat-app.firebaseapp.com',
//     projectId: 'quan-ly-student-chat-app',
//     storageBucket: 'quan-ly-student-chat-app.appspot.com',
//     messagingSenderId: '491823542439',
//     appId: '1:491823542439:web:3ae6da48e14408b783eb82',
//     measurementId: 'G-76HDNRXWB9'
// };

// const app = initializeApp({...firebaseConfig});

// export const auth = getAuth()
// export const db = getDatabase();

// export default app;

// import { initializeApp } from 'firebase/app';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { getFirestore, collection, getDoc, getDocs } from '@firebase/firestore';

// const firebaseApp = initializeApp({
//     apiKey: 'AIzaSyCrvXt5A83cm3Y11AkCLEYIn31hvNMl1Ss',
//     authDomain: 'quan-ly-student-chat-app.firebaseapp.com',
//     projectId: 'quan-ly-student-chat-app',
//     storageBucket: 'quan-ly-student-chat-app.appspot.com',
//     messagingSenderId: '491823542439',
//     appId: '1:491823542439:web:3ae6da48e14408b783eb82',
//     measurementId: 'G-76HDNRXWB9'
// });

// export const auth = getAuth(firebaseApp)
// export const db = getFirestore(firebaseApp);
// db.collection('todos').getDocs();
// export const todosCol = collection(db, 'todos');
// export const snapshot = await getDocs(todosCol);

// // Trang thái xác thực firebase
// onAuthStateChanged(auth, user => {
//     if(user !== null) {
//         console.log('Firebase đã đăng nhập')
//     }else console.log('Firebase không thành công')
// })