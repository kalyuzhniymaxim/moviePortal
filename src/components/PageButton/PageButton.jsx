import styles from './PageButton.module.scss';

export function PageButton({ text, handle }) {
  return (
    <button onClick={handle} type="submit" className={styles.pageButton}>
      {text}
    </button>
  );
}
