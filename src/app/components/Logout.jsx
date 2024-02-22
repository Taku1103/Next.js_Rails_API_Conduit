"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Cookie from 'js-cookie';

const Logout = ({}) => {
  const router = useRouter();

  const deleteArticle = async (e) => {
    console.log("logoutボタンおされ");
    e.preventDefault();

    const URL = "https://tk-22.net";

    await fetch(`${URL}/api/logout`, {
      method: "DELETE",
    });

    Cookie.remove('token');
    Cookie.remove('user_id');
    Cookie.remove('username');

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
