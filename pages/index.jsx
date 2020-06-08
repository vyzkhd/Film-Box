import Form from "../components/form";
import { useState } from "react";
import Result from "../components/results";
import fetch from "isomorphic-unfetch";

export default function Home({ data }) {
  const [search, setSearch] = useState("");

  const match = data.movies.find((movie) => {
    return movie.title.toLowerCase() == search.toLowerCase();
  });

  const title = match ? match.title : "";

  return (
    <div className="homePage">
      <h1 className="title">Film Box.</h1>
      <Form setSearch={setSearch} />

      <Result title={title} />
      <style jsx>
        {`
          .homePage {
            font-size: 27px;
            background: -webkit-linear-gradient(top, red, blue);
            padding-bottom: 140px;
          }
          .title {
            color: white;
            padding: 40px;
            margin-bottom: 0px;
          }
        `}
      </style>
    </div>
  );
}

Home.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/hello");
  const json = await res.json();
  return { data: json };
};
