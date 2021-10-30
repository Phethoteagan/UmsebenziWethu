import React, { useContext } from "react";
import { AuthPage } from "./Auth";
import { UserContext } from "./UserContext";

function Details() {
  const currentUser = useContext(UserContext);

  return (
    <>
      {currentUser && (
        <>
          <img
            src={currentUser.photoURL}
            width="100"
            height="100"
            alt="avatar"
          />
          <p>{currentUser.displayName}</p>
          <p>{currentUser.email}</p>
        </>
      )}
      <AuthPage />
    </>
  );
}

export default Details;