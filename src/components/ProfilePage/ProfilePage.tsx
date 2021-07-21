import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "../NavigationBar/NavBar";

const ProfilePage = (): JSX.Element => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  useEffect(() => {}, []);
  let page = <></>;
  if (loading) {
    page = <h3 className="p-5">Loading...</h3>;
  }
  if (!loading) {
    if (error === "") {
      page = (
        <div className="p-4 flex flex-col">
          <span className="text-lg text-primary">Welcome {}</span>
        </div>
      );
    } else {
      page = (
        <div>
          <h3 className="p-5">{error}.Please Try Again</h3>
        </div>
      );
    }
  }
  return (
    <>
      <Navbar />
      {page}
    </>
  );
};

export default ProfilePage;
