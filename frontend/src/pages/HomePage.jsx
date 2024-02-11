import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function HomePage() {
  return (
    <MainLayout>
      <div className="bg-light p-5 mt-4 rounded-3">
        <h1>Welcome to the POS for small business</h1>
        <p>Laborer</p>
        <p>If you have an issue, call 124-231-112 anytimes</p>
        <Link to="/pos" className="btn btn-primary">
          Click here to sell products
        </Link>
      </div>
    </MainLayout>
  );
}

export default HomePage;
