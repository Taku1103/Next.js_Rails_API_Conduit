"use client";

import React from "react";
import { useRouter } from "next/navigation";

const DeleteButton = ({ deleteArticleId }) => {
  const router = useRouter();

  const deleteArticle = async (e) => {
    console.log("deleteボタンおされ");
    e.preventDefault();

    const URL = "https://tk-22.net";

    await fetch(`${URL}/api/articles/${deleteArticleId}`, {
      method: "DELETE",
    });

    router.push("/");
    router.refresh();
  };
  return (
    <div>
      <button className="btn btn-sm btn-outline-danger" onClick={deleteArticle}>
        <i className="ion-trash-a"></i> Delete Article
      </button>
    </div>
  );
};

export default DeleteButton;
