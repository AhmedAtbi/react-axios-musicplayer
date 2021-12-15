import React from "react";
import app from "./base";
import Layout from "../containers/Layout/Layout";

const Home = () => {
  return (
    <>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
      <Layout />
    </>
  );
};

export default Home;
