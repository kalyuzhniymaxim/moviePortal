import styles from './MoviesCard.module.scss';
export default function MoviesCard({ posterUrl, nameRu, year, nameOriginal }) {
  return (
    <li className={styles.moviesCard}>
      <img className={styles.moviesCardImg} src={posterUrl} alt="poster" />
      <div className={styles.moviesCardInfo}>
        <p className={styles.moviesCardTitle}>{nameRu ?? nameOriginal}</p>
        <span className={styles.moviesCardYear}>{year}</span>
      </div>
    </li>
  );
}
