import styles from './SearchSuggest.module.scss';
export default function SearchSuggest({ suggestions }) {
    console.log(suggestions)
  return (
    <ul className={styles.searchSuggest}>
      {suggestions.map(({ nameRu, nameOriginal, kinopoiskId }) => (
        <li key={kinopoiskId}>
          <p>{nameRu ?? nameOriginal}</p>
        </li>
      ))}
    </ul>
  );
}