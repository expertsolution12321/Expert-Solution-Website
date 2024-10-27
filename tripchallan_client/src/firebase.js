import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCZH8o3HaKaJShxjMKiDffAVTQaFrChNBI",
  authDomain: "vahantracking-system.firebaseapp.com",
  projectId: "vahantracking-system",
  storageBucket: "vahantracking-system.appspot.com",
  messagingSenderId: "166070064703",
  appId: "1:166070064703:web:29674ac4cace95e310ca8a",
  measurementId: "G-4SB0CFLT3L",
  databaseURL: "https://vahantracking-system-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
