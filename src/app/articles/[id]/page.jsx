import React from "react";
import Link from "next/link";
import DeleteButton from "@/app/components/DeleteButton";

const showArticle = async ({ params }) => {
  const URL = "https://tk-22.net";

  const res = await fetch(`${URL}/api/articles/${params.id}`, {
    cache: "no-store",
  });
  const data = await res.json();

  const articleData = data.article;
  console.log("article!");
  console.log(params.id);
  console.log(articleData);
  console.log("fetch成功!");
  return (
    <div>
      <div className="article-page bg-black">
        <div className="banner">
          <div className="container">
            <h1>{articleData.title}</h1>

            <div className="article-meta">
              <a href="/">
                <img src="http://i.imgur.com/Qr71crq.jpg" />
              </a>
              <div className="info">
                <a href="/" className="author">
                  {articleData.user_name}
                </a>
                <span className="date">
                  {new Date(articleData.created_at).toLocaleDateString()}
                </span>
              </div>
              &nbsp;&nbsp;
              <Link
                href={{ pathname: "/articles/edit", query: articleData  }}
                className="btn btn-sm btn-outline-secondary"
              >
                <i className="ion-edit"></i> Edit Article
              </Link>
              <DeleteButton deleteArticleId={articleData.id} />
            </div>
          </div>
        </div>

        <div className="container page">
          <div className="row article-content">
            <div className="col-md-12">
              <h2 id="introducing-ionic">{articleData.description}</h2>
              <p>{articleData.body}</p>
            </div>
          </div>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default showArticle;
