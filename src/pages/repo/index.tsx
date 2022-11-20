import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { UserRepoCard } from "../../components/UserRepoCard";
import styles from "./styles.module.scss";

interface RepoType {
  id: number;
}

export default function Repo() {
  const [repo, setRepo] = useState({} as any);
  const [issues, setIssues] = useState([]);
  const [userRepos, setUserRepos] = useState<RepoType[]>([]);
  const { username, repoName } = useRouter().query as any;

  useEffect(() => {
    async function initializeRepoInfos() {
      const repo = await (
        await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
      ).data;
      const repoIssues = await (
        await axios.get(
          `https://api.github.com/repos/${username}/${repoName}/issues`
        )
      ).data;
      const userRepositories = await (
        await axios.get(`https://api.github.com/users/${username}/repos`)
      ).data;

      setRepo(repo);
      setIssues(repoIssues);
      setUserRepos(userRepositories);
    }

    initializeRepoInfos();
  }, []);

  return (
    <div className={styles.userContent}>
      <Head>
        <title>{repo.full_name} | Github Explorer</title>
      </Head>

      <Header isUser />

      <section>
        <img src={repo?.owner?.avatar_url} alt="User Avatar" />

        <div>
          <h1>{repo.name}</h1>
          <p>{repo.description}</p>
        </div>
      </section>

      <div className={styles.githubInteractions}>
        <div>
          <h2>{repo.stargazers_count}</h2>
          <p>Stars</p>
        </div>
        <div>
          <h2>{repo.forks}</h2>
          <p>Forks</p>
        </div>
        <div>
          <h2>{issues.length}</h2>
          <p>Open issues</p>
        </div>
      </div>

      <h1>Other {repo?.owner?.login} repos</h1>

      {userRepos.map((repo) => {
        return <UserRepoCard key={repo.id} repo={repo} />;
      })}
    </div>
  );
}
