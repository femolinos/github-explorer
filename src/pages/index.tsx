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
  const [repoQuery, setRepoQuery] = useState('');

  function handleRepoQueryChange(event: any) {
    setRepoQuery(event.target.value);
  }

  async function handleRepoQuery() {
    const result = await (await axios.get(`https://api.github.com/users/${repoQuery}/repos`)).data;

    setRepos(result);
  }

  async function getRepo() {
    const repos = await (await axios.get('https://api.github.com/repositories')).data;

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
          <input type="text" placeholder="Type username here" value={repoQuery} onChange={evt => handleRepoQueryChange(evt)} />
          <button type="button" onClick={handleRepoQuery}>
            Search
          </button>
        </div>

        {
          repos.length > 0 ? 
            repos.map(repo => {
              return(
                <Card key={repo.id} repo={repo} />
              );
            })
            : <h1>Sorry, your filter didn't match any Github user :(</h1>
        }
      </section>
    </div>
  );
}