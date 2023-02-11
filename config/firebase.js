import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBLJJie8COhL6dptsKT4K4NTnJGGLeWlaY",
  authDomain: "sdp-react-native.firebaseapp.com",
  projectId: "sdp-react-native",
  storageBucket: "sdp-react-native.appspot.com",
  messagingSenderId: "601867349337",
  appId: "1:601867349337:web:b2dfa289bb85dbafdf7048",
  measurementId: "G-CL2W55E06X",
  databaseURL: "https://sdp-react-native-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);

export default app;
