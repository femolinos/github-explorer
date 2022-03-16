import styles from './styles.module.scss';

export function UserRepoCard() {
  return(
    <div className={styles.cardContainer}>
      <div className={styles.repoInfos}>
        <div>
          <p>repo-react-js</p>
          <p>Felipe Molinos</p>
        </div>
      </div>

      <button type="button">
        <img src="/images/back-arrow.svg" alt="Redirect to Github repo" />
      </button>
    </div>
  );
}