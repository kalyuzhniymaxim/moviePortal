import styles from './PaginationButton.module.scss';

export function PaginationButton({ page, setPage, data }) {
  let paginationList = Array.from(
    { length: data.totalPages },
    (_, index) => index + 1
  );

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
    scrollToTop();
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
    scrollToTop();
  };

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
    scrollToTop();
  };

  let isAnimating = false;
  const scrollToTop = () => {
     if (isAnimating) return;
     isAnimating = true;

    let start = null;
    const duration = 1500; 
    const element = document.documentElement;
    const startPosition = element.scrollTop; 

    const animateScroll = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      element.scrollTop = startPosition + (0 - startPosition) * progress ;  

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
         isAnimating = false;
      }
    };
      requestAnimationFrame(animateScroll);
  };


  return (
    <div className={styles.pagination}>
      <button
        disabled={page === 1}
        className={styles.paginationBtn}
        id="prev"
        onClick={handlePrevPage}
      >
        {'<'}
      </button>
      <ul className={styles.paginationList}>
        {paginationList.map((item, index) => (
          <li
            onClick={() => handlePageClick(item)}
            key={index}
            className={`${styles.paginationItem} ${
              page === item ? styles.paginationItemActive : ''
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
      <button
        className={styles.paginationBtn}
        id="next"
        onClick={handleNextPage}
        disabled={page === data.totalPages}
      >
        {'>'}
      </button>
    </div>
  );
}