import { Header } from "../../components/Header";
import { UserRepoCard } from "../../components/UserRepoCard";
import styles from './styles.module.scss';

export default function User() {
  return(
    <div className={styles.userContent}>
      <Header isUser />

      <section>
        <img src="https://avatars.githubusercontent.com/u/40651456?v=4" alt="User Avatar" />
        
        <div>
          <h1>femolinos/repo</h1>
          <p>Repo description</p>
        </div>
      </section>

      <div className={styles.githubInteractions}>
        <div>
          <h2>1808</h2>
          <p>Stars</p>
        </div>
        <div>
          <h2>48</h2>
          <p>Forks</p>
        </div>
        <div>
          <h2>67</h2>
          <p>Open issues</p>
        </div>
      </div>

      <UserRepoCard /> 
    </div>
  );
}