// config.js - Firebase & Cloudinary Settings

// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";

// Your Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrBBKwp1wTsmxJNdFhOafKpjvXTi0CMao",
    authDomain: "my-rent-store.firebaseapp.com",
    projectId: "my-rent-store",
    storageBucket: "my-rent-store.firebasestorage.app",
    messagingSenderId: "669964569556",
    appId: "1:669964569556:web:57e923d9eab89ef98be441"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Cloudinary Settings
const CLOUDINARY_CLOUD_NAME = "dec141lqk"; 
const CLOUDINARY_PRESET = "My-rent-store"; 

// Export for use in other files
export { app, auth, db, storage, CLOUDINARY_CLOUD_NAME, CLOUDINARY_PRESET };
