import firebase from "firebase/app";
import "firebase/database";
import "firebase/functions";
import "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";
import { ReactIsInDevelomentMode } from "./utils";

firebase.initializeApp(firebaseConfig);
// const database = firebase.database();
const functions = firebase.functions();
// const auth = firebase.auth();

const IsDeveloment = ReactIsInDevelomentMode();

if (IsDeveloment) {
  console.log("ReactIsInDevelomentMode");
  functions.useFunctionsEmulator("http://localhost:5001");
} else {
  console.log("ReactIsInProductionMode");
}

export const sendAsk = async (name, email, content) => {
  const sendMessage = functions.httpsCallable(
    IsDeveloment ? "sendMessageDev" : "sendMessage"
  );
  return sendMessage({ name, email, content });
};
