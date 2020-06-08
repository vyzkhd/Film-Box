import Link from "next/link";

export default function Result({ title }) {
  return (
    <div className="results">
      {title ? (
        <Link href="/[id]" as={`/${title}`}>
          <a>{title}</a>
        </Link>
      ) : (
        ""
      )}
      <style jsx>
        {`
          .results {
            text-align: center;
            font-size: 70px;
            padding-bottom: 240px;
            margin-top: 0;
          }

          .results a {
            color: white;
          }
        `}
      </style>
    </div>
  );
}
