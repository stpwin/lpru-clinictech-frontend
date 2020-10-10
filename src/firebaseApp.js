import firebase from "firebase/app";
import "firebase/database";
import "firebase/functions";
import "firebase/auth";
import "firebase/storage";
import { firebaseConfig } from "./firebaseConfig";
import { ReactIsInDevelomentMode } from "./utils";

firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
export const storage = firebase.storage();
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
      const {
        email,
        facebook,
        facebookName,
        fax,
        place,
        placeName,
        tel,
        footerText
      } = snapshot.val();
      localStorage.setItem(
        "webInfo",
        JSON.stringify({
          email,
          facebook,
          facebookName,
          fax,
          place,
          placeName,
          tel,
          footerText
        })
      );
      return {
        email,
        facebook,
        facebookName,
        fax,
        place,
        placeName,
        tel,
        footerText
      };
    })
    .catch((err) => {
      console.warn(err);
    });
};
