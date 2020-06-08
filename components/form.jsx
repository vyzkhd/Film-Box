import { useState, useEffect } from "react";

const Form = ({ setSearch }) => {
  const [film, setFilm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(film);
  };

  return (
    <div className="movieForm">
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the movie"
          value={film}
          onChange={(e) => setFilm(e.target.value)}
        />
      </form>

      <style jsx>
        {`
          .movieForm {
            padding: 40px;
            margin-top: 0px;
          }
          .movieForm form {
            width: 100%;
            text-align: center;
          }

          .movieForm input {
            width: 50%;
            border: 4px solid green;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};

export default Form;
