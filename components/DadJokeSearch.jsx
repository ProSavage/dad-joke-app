import { useEffect, useState } from "react";
import axios from "axios";

export default function DadJokeSearch() {
  const [search, setSearch] = useState("");

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetchJokeFromApi();
  }, []);

  const fetchJokeFromApi = () => {
    axios
      .get("https://icanhazdadjoke.com/search?term=" + search, {
        headers: {
          accept: "application/json",
        },
      })
      .then((res) => {
        setJokes(res.data.results);
      });
  };

  return (
    <>
      <h2>Dad Joke Search</h2>
      <p>Filter: {search}</p>
      <input
        type={"text"}
        placeholder={"search here"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => fetchJokeFromApi()}>Search</button>
      <p>Jokes Found:</p>
      {jokes.map((joke) => (
        <p key={joke.id}>{joke.joke}</p>
      ))}
    </>
  );
}
