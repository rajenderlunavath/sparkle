import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "../services/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check Firestore
      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        await setDoc(userRef, {
          name: user.displayName,
          email: user.email,
          uid: user.uid,
        });
      }

      navigate("/profile");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button onClick={handleSignIn} className="bg-blue-600 text-white px-6 py-2 rounded">
        Sign in with Google
      </button>
    </div>
  );
}

export default SignIn;
