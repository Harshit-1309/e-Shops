import React from "react";
import Layout from "../../component/Layout/Layout";
import AdminMenu from "../../component/Layout/AdminMenu";

const Users = () => {
  return (
    <Layout title={"Dashboard - Users"}>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1>Users</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
