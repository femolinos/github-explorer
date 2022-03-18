import Head from "next/head";
import { useEffect, useState } from "react";
import axios from 'axios';

import { Card } from "../components/Card";
import { Header } from "../components/Header";

import styles from './home.module.scss';

interface Repos {
  id: number;
}

export default function Home() {
  const [repos, setRepos] = useState<Repos[]>([]);

  async function getRepo() {
    const repos = await (await axios.get('https://api.github.com/repositories')).data;

    console.log(repos[16]);

    setRepos(repos);
  }

  useEffect(() =>{
    getRepo();
  }, []);

  return(
    <div className={styles.homeContent}>
      <Head>
        <title>Home | Github Explorer</title>
      </Head>

      <Header />

      <section>
        <h1>
          Discover new repos <br />
          on Github.
        </h1>

        <div className={styles.inputSection}>
          <input type="text" placeholder="Type here" />
          <button type="button">
            Search
          </button>
        </div>

        {
          repos.map(repo => {
            return(
              <Card key={repo.id} repo={repo} />
            );
          })
        }
      </section>
    </div>
  );
}