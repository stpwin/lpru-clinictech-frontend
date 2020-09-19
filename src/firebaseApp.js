import firebase from "firebase/app";
import "firebase/database";
import { firebaseConfig } from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

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
      localStorage.setItem("webInfo", JSON.stringify({
        email,
        facebook,
        fax,
        place,
        tel,
        footerText,
      }));
      return { email, facebook, fax, place, tel, footerText };
    })
    .catch((err) => {
      console.warn(err);
    });
};