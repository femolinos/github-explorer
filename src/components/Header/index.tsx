import styles from './styles.module.scss';

interface HeaderProps {
  isUser?: boolean;
}

export function Header({ isUser }: HeaderProps) {
  return(
    <div className={styles.headerContainer}>
      <img src="/images/logo.svg" alt="Logo Github Explorer" />

      {
        isUser ? 
        <div>
          <button type="button">
            <img src="/images/back-arrow.svg" alt="Back" />
            <p>Back</p>
          </button>
        </div>
        : null
      }
    </div>
  );
}