import useCurrentUser from "hooks/useCurrentUser";

const HomePage = () => {
  const { loading, user, signOut } = useCurrentUser();

  const handleSignOut = (e) => {
    e.preventDefault();
    e.stopPropagation();

    signOut();
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-4xl font-bold text-center">AUTHENTICATED PAGE</h1>
        <p className="text-center mb-8">
          {user?.email} | {user?.uid}
        </p>

        <div className="flex justify-center">
          <button onClick={handleSignOut} className="underline text-red-500">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
