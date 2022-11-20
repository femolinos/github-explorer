import styles from "./styles.module.scss";

export function UserRepoCard({ repo }: any) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.repoInfos}>
        <div>
          <p>
            {repo.name.length > 20
              ? repo.name.substring(0, 19) + "..."
              : repo.name}
          </p>
          <p>{repo.owner.login}</p>
        </div>
      </div>

      <a
        href={`https://github.com/${repo.full_name}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src="/images/back-arrow.svg" alt="Redirect to Github repo" />
      </a>
    </div>
  );
}
