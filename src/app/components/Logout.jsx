"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Logout = ({}) => {
  const router = useRouter();

  const deleteArticle = async (e) => {
    console.log("logoutボタンおされ");
    e.preventDefault();

    const localhost = "http://localhost:3001";

    await fetch(`${localhost}/api/logout`, {
      method: "DELETE",
    });

    document.cookie = "token=; path=/";
    document.cookie = "user_id=; path=/";
    document.cookie = "username=; path=/";

    router.push("/");
    router.refresh();
  };
  return (
    <div>
      <button className="btn btn-sm btn-outline-danger" onClick={deleteArticle}>
        logout
      </button>
    </div>
  );
};

export default Logout;
