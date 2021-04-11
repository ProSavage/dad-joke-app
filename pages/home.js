import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import DadJokeSearch from "../components/DadJokeSearch";
import RandomDadJoke from "../components/RandomDadJoke";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Dad Jokes App</h1>
      <RandomDadJoke />
      <DadJokeSearch />
    </div>
  );
}
