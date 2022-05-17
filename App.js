import React, { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-community/google-signin";
import Authentication from "./screens/Authentication";
import BottomNavigationTab from "./Components/Navigation/BottomNavigation/BottomNavgation";
import AuthScreenNavigation from "./Components/Navigation/ScreenNavigation/ScreenNavigation";

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "879155870340-94gsvtbrkhvjarjsj7nf4ooc2cakkcah.apps.googleusercontent.com",
    });
  }, []);

  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  auth().onAuthStateChanged((user) => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });

  if (authenticated) {
    return <AuthScreenNavigation/>
  }

  return <Authentication onGoogleButtonPress={onGoogleButtonPress} />;
}
