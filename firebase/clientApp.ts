import { initializeApp, getApps} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_HM_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_HM_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_HM_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_HM_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_HM_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_HM_APP_ID
};

let firebaseApp;
if(!getApps().length){
    firebaseApp = initializeApp(firebaseConfig);
}
export const app = firebaseApp;
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);