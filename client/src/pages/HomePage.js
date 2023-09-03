import React from "react";
import Layout from "../component/Layout/Layout";
import { useAuth } from "../context/auth";

const HomePage = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"eShops"}>
      <h1>Home Page</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default HomePage;
