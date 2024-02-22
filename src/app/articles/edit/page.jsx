"use client";

import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const createArticle = () => {
  const [routerReady, setRouterReady] = useState(false);
  const router = useRouter();
  const { query } = router;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const handleRouteChange = () => {
      if (router.isReady) {
        setTitle(query.title || "");
        setDescription(query.description || "");
        setBody(query.body || "");
        setRouterReady(true);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    handleRouteChange(); // 初期ロード時にも実行

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router, query.title, query.description, query.body]);

  const handleCreateArticle = async (e) => {
    console.log("updateボタンおされ");
    e.preventDefault();

    const URL = "https://tk-22.net";

    await fetch(`${URL}/api/articles/${query.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, body }),
    });

    router.push("/");
  };

  if (!routerReady) return <div>Loading...</div>;

  return (
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
  );
};

export default createArticle;


