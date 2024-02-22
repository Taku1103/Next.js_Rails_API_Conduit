"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const createArticle = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");

  const user_id = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");

  const handleCreateArticle = async (e) => {
    console.log("articleクリエイトボタンおされ");
    e.preventDefault();

    const URL = "https://tk-22.net";

    await fetch(`${URL}/api/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ article: { title, description, body, user_id } }),
    });

    console.log();
    router.push("/");
    router.refresh();
  };

  return (
    <div>
      <div className="editor-page bg-black">
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">
              {/* <ul className="error-messages">
                <li>That title is required</li>
              </ul> */}
              <form onSubmit={handleCreateArticle}>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Article Title"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="What's this article about?"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea
                      className="form-control"
                      rows="8"
                      placeholder="Write your article (in markdown)"
                      onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                  </fieldset>
                  <button
                    className="btn btn-lg pull-xs-right btn-primary"
                    type="submit"
                  >
                    Publish Article
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default createArticle;

