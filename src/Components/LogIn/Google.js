import { signInWithPopup } from "firebase/auth";
import React from "react";
import { Button } from "react-bootstrap";
import {
  useAuthState,
  useSignInWithGoogle,
  useSignOut,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init";

const Google = () => {
  const navigate = useNavigate();
  const [signOut] = useSignOut(auth);
  const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);
  const googleSignIn = () => {
    signInWithGoogle();
    console.log(user);
    // navigate("/");
  };
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <h3>Signed In User: {user?.displayName}</h3>
      </div>
    );
  }
  if (error) {
    const message = error.message;
    if (message.includes("Error (auth/popup-closed-by-user)")) {
      return <p> pop up Close</p>;
    }
  }
  const handleSignOut = () => {
    signOut();
    navigate("/");
  };
  return (
    <div className="mt-5">
      <Button variant="warning" onClick={googleSignIn}>
        Google Sign In
      </Button>
      <Button variant="warning ms-5" onClick={handleSignOut}>
        Sign Out
      </Button>
    </div>
  );
};

export default Google;
