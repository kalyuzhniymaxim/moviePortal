import styles from './Loader.module.scss';

export function Loader() {
  return (
    <div className={styles.loaderConainer}>
      <div className={styles.loader}></div>
    </div>
  );
}
