import Image from "next/image";
import Link from "next/link";
import ArticleList from "./components/ArticleList";

export default async function Home() {
  const localhost = "http://localhost:3001";

  const res = await fetch(`${localhost}/api/articles`, { cache: "no-store" });
  const data = await res.json();
  console.log(data);
  const articlesData = data.articles;

  // console.log(articlesData);
  console.log("fetch成功!");

  return (
    <main className=" bg-black">
      <div className="home-page">
        <div className="banner">
          <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>

        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <div className="feed-toggle"></div>

              <ArticleList articles={articlesData} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
