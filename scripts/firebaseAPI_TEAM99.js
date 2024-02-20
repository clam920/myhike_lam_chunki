//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
        apiKey: "AIzaSyANl5--o4gu_k8afyh5JDDg3uB8Lsw4TyA",
        authDomain: "comp1800-202410-a160f.firebaseapp.com",
        projectId: "comp1800-202410-a160f",
        storageBucket: "comp1800-202410-a160f.appspot.com",
        messagingSenderId: "30613212050",
        appId: "1:30613212050:web:ac4cd4c77c0aa895464f4b"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
