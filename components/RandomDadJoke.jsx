import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RandomDadJoke() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetchJokeFromApi();
  }, []);

  const fetchJokeFromApi = () => {
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: {
          accept: "application/json",
        },
      })
      .then((res) => {
        setJoke(res.data.joke);
      });
  };

  return (
    <>
      <h2>Random Dad Joke</h2>
      <p>Joke: {joke}</p>
      <button onClick={() => fetchJokeFromApi()}>Random Dad Joke</button>
    </>
  );
}
