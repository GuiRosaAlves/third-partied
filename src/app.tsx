import * as React from "react";
import { createRoot } from "react-dom/client";
import { initializeApp } from "firebase/app";
import HomeController from "./containers/home.controller";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbWgIups1mEdWg_ktxjpPR5sglAvKzWnc",
  authDomain: "third-partied.firebaseapp.com",
  projectId: "third-partied",
  storageBucket: "third-partied.appspot.com",
  messagingSenderId: "168282546806",
  appId: "1:168282546806:web:8ef984e6faeda4bc273557",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

function render() {
  const container = document.getElementById("root") ?? document.body;
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<HomeController></HomeController>);
}

render();
