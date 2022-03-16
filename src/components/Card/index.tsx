import styles from './styles.module.scss';

export function Card() {
  return(
    <div className={styles.cardContainer}>
      <div className={styles.repoInfos}>
        <img src="https://avatars.githubusercontent.com/u/40651456?v=4" alt="User Avatar" />

        <div>
          <p>femolinos/repo</p>
          <p>Repo description</p>
        </div>
      </div>

      <button type="button">
        <img src="/images/back-arrow.svg" alt="Redirect to Repo" />
      </button>
    </div>
  );
}