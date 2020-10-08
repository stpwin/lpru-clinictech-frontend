import React from "react";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/functions";
import "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const functions = firebase.functions();
const auth = firebase.auth();

function ReactIsInDevelomentMode() {
  return "_self" in React.createElement("div");
}

if (ReactIsInDevelomentMode()) {
  console.log("ReactIsInDevelomentMode");
  functions.useFunctionsEmulator("http://localhost:5001");
} else {
  console.log("ReactIsInProductionMode");
}

export const sendAsk = async (name, email, content) => {
  console.log("Sign in as anonymously");
  return auth.signInAnonymously().then(async (user) => {
    await auth.currentUser.updateProfile({ displayName: name });
    await auth.currentUser.updateEmail(email);
    console.log({ user });
    const sendMessage = functions.httpsCallable("sendMessage");
    return sendMessage({ name, email, content });
  });
};

export const getWebContact = () => {
  const webInfoCache = localStorage.getItem("webInfo");
  if (webInfoCache) {
    try {
      return Promise.resolve(JSON.parse(webInfoCache));
    } catch {
      localStorage.setItem("webInfo", null);
    }
  }
  const webContactDB = database.ref("web-contact");
  return webContactDB
    .once("value")
    .then((snapshot) => {
      const { email, facebook, fax, place, tel, footerText } = snapshot.val();
      localStorage.setItem(
        "webInfo",
        JSON.stringify({
          email,
          facebook,
          fax,
          place,
          tel,
          footerText
        })
      );
      return { email, facebook, fax, place, tel, footerText };
    })
    .catch((err) => {
      console.warn(err);
    });
};
