"use client";

import React from "react";
import { useRouter } from "next/navigation";

const DeleteButton = ({ deleteArticleId }) => {
  const router = useRouter();

  const deleteArticle = async (e) => {
    console.log("deleteボタンおされ");
    e.preventDefault();

    const localhost = "http://localhost:3001";

    await fetch(`${localhost}/api/articles/${deleteArticleId}`, {
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
