"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React, { useState, Suspense } from "react";

const createArticle = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [title, setTitle] = useState(searchParams.get("title"));
  const [description, setDescription] = useState(
    searchParams.get("description")
  );
  const [body, setBody] = useState(searchParams.get("body"));

  const handleCreateArticle = async (e) => {
    console.log("updateボタンおされ");
    e.preventDefault();

    const URL = "https://tk-22.net";

    await fetch(`${URL}/api/articles/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, body }),
    });

    router.push("/");
    router.refresh();
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <div className="editor-page bg-black">
          <div className="container page">
            <div className="row">
              <div className="col-md-10 offset-md-1 col-xs-12">
                <form onSubmit={handleCreateArticle}>
                  <fieldset>
                    <fieldset className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Article Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </fieldset>
                    <fieldset className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="What's this article about?"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </fieldset>
                    <fieldset className="form-group">
                      <textarea
                        className="form-control"
                        rows="8"
                        placeholder="Write your article (in markdown)"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                      ></textarea>
                    </fieldset>
                    <button
                      className="btn btn-lg pull-xs-right btn-primary"
                      type="submit"
                    >
                      Update Article
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default createArticle;
