// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";
import {PermissionsAndroid} from 'react-native'
  



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

const firebaseConfig = {

  apiKey: "AIzaSyCIeHF79N3qF9a2MgJN6lgMTnbiuwbhXQw",

  authDomain: "biblia-e1694.firebaseapp.com",

  databaseURL: "https://biblia-e1694-default-rtdb.firebaseio.com",

  projectId: "biblia-e1694",

  storageBucket: "biblia-e1694.appspot.com",

  messagingSenderId: "101919531812",

  appId: "1:101919531812:web:727f71a4130035583109b1",

  measurementId: "G-GGHMV8LQT1"

};

function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
    }})
}    
// Initialize Firebase

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);
getToken(messaging, {vapidKey: "BBH_bXiLWKWi9YoFMpZG86QyWufhlYJ7kVcG65lbE0UZYdMtxv-piEpleLte6zkXuPq0hKp4q0d7wvMRmG2U1lw"});


const analytics = getAnalytics(app);