import React from "react";
import { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResult() {
  const { users, loading } = useContext(GithubContext);

  // We just want to load when the component are run ,when the the component load
  //   useEffect(() => {
  //     fetchUser();
  //   }, []);

  // Check if users is undefined or null
  if (!users) {
    return null; // or handle the case when users is not available
  }

  // Check if users is an array before using map
  if (!loading && Array.isArray(users)) {
    return (
      <div
        className="grid grid-cols-1 gap-8 xl:grid-cols-4
      lg:grid-cols-3 md:grid-cols-2"
      >
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResult;
