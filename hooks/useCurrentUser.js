import { onAuthStateChanged, signOut as signOutFirebase } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { auth } from "services/firebase";

const useCurrentUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        router.push("/auth/signin");
      }
    });
  }, []);

  const signOut = () => {
    signOutFirebase(auth)
      .then(() => {
        router.push("/auth/signin");
      })
      .catch((err) => console.log(err));
  };

  return {
    user,
    loading,
    signOut,
  };
};

export default useCurrentUser;
