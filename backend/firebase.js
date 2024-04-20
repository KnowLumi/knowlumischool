import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAI5QWoJV4WrR3Vo90oqgcw8i4Rv7_dJac",
    authDomain: "knowlumi-4b3d4.firebaseapp.com",
    projectId: "knowlumi-4b3d4",
    storageBucket: "knowlumi-4b3d4.appspot.com",
    messagingSenderId: "1051713480959",
    appId: "1:1051713480959:web:7bc42dbec6a262194004ca",
    measurementId: "G-QEDDC0T31W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);