import { useRouter } from "next/router";

const UserProfilePage = () => {
  const router = useRouter();
  const { query } = router;

  return <div>this is {query.username} profile page</div>;
};

export default UserProfilePage;
