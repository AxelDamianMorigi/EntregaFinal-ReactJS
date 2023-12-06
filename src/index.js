import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAMKCFTMwBVa_Ban6XtCbtMb1CWOjg1WFE",
  authDomain: "sprlibros-4977e.firebaseapp.com",
  projectId: "sprlibros-4977e",
  storageBucket: "sprlibros-4977e.appspot.com",
  messagingSenderId: "898574522594",
  appId: "1:898574522594:web:9868f3700698f812e666bb",
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);