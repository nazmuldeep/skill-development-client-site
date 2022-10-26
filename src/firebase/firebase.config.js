// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzeG75G3kJ4NsqkWhLaSvd8KvhyX3NqIU",
    authDomain: "skill-development-client-site.firebaseapp.com",
    projectId: "skill-development-client-site",
    storageBucket: "skill-development-client-site.appspot.com",
    messagingSenderId: "435641553548",
    appId: "1:435641553548:web:5d9c26919e76292f9221a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;