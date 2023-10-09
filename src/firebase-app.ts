import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMKtNHKuZ4v5kcPbPxnWBSYRkD-LNMFmY",
  authDomain: "nwitter-reloaded-beb9d.firebaseapp.com",
  projectId: "nwitter-reloaded-beb9d",
  storageBucket: "nwitter-reloaded-beb9d.appspot.com",
  messagingSenderId: "833974907765",
  appId: "1:833974907765:web:6454331542317818c3193c",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
