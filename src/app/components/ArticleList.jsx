import React from "react";
import Link from "next/link";
const ArticleList = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <div className="article-preview">
            <div className="article-meta">
              <Link href="/">
                <img src="http://i.imgur.com/Qr71crq.jpg" />
              </Link>
              <div className="info">
                <Link href="/" className="author">
                  {article.user_name}
                </Link>
                <span className="date">
                  {new Date(article.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>
            <Link href={`/articles/${article.id}`} className="preview-link">
              <h1>{article.title}</h1>
              <p>{article.content}</p>
              <span>Read more...</span>
            </Link>
          </div>
          {/* {console.log("articleの情報")} */}
          {/* {console.log(article)} */}
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
