export default function Movie({ movie }) {
  return (
    <div className="film">
      <h1>{movie.title}</h1>

      <h3>Directed By</h3>

      <h2>{movie.director}</h2>

      <span>Run time: {movie.runtime} hours</span>

      <h3>Rating: {movie.rating}</h3>
      <img src={`/${movie.title}.jpg`} />

      <style jsx>
        {`
          .film {
            color: white;
            text-align: center;
            background: url("/bg.png");
            padding: 40px;
          }

          .film img {
            height: 300px;
            width: 300px;
          }
        `}
      </style>
    </div>
  );
}

Movie.getInitialProps = async ({ query }) => {
  const res = await fetch("http://localhost:3000/api/hello");
  const json = await res.json();
  return {
    movie: json.movies.find((movie) => {
      return movie.title == query.id;
    }),
  };
};
