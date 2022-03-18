import Router from 'next/router';

import styles from './styles.module.scss';

export function Card({repo}: any) {
  function handleUserRedirect() {
    Router.push({
      pathname: '/repo',
      query: {username: repo.owner.login, repoName: repo.name}
    });
  }

  return(
    <div className={styles.cardContainer}>
      <div className={styles.repoInfos}>
        <img src={repo.owner.avatar_url} alt="Github user avatar" />

        <div>
          <p onClick={handleUserRedirect}>{ repo.owner.login }<span>/{ repo.name }</span></p>
          <p>{ repo.description !== null ? repo.description : 'No description' }</p>
        </div>
      </div>

      <a href={`https://github.com/${repo.owner.login}/${repo.name}`} target="_blank" rel="noreferrer">
        <img src="/images/back-arrow.svg" alt="Redirect to Github Repo" />
      </a>
    </div>
  );
}