import Head from "next/head";
import { Header } from "../components/Header";

import styles from './home.module.scss';

export default function Home() {
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
      </section>
    </div>
  );
}