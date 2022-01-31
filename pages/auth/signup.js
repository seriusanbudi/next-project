import { useState } from "react";
import { auth } from "services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registering, setRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setErrorMessage(null);
    setRegistering(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setRegistering(false);
        router.push("/auth/signin");
      })
      .catch((error) => {
        setRegistering(false);
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <h1 className="text-3xl font-bold text-center mb-10">Sign Up</h1>
        {errorMessage && (
          <div className="text-red-500 mb-4">{errorMessage}</div>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col w-[320px] gap-2">
          <input
            className="p-2 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none"
            placeholder="jhon.doe@gmail.com"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="p-2 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none mb-4"
            placeholder="super secret"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="border-2 border-blue-500 bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-600 hover:border-blue-600 disabled:opacity-40"
            type="submit"
            disabled={registering}
          >
            {registering ? "Submiting..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
