import styles from './Gallery.module.css';
import Image from 'next/image';
import larr from '../../public/leftarrow.svg';
import rarr from '../../public/rightarrow.svg';

const Gallery = ({ children, nextPageHandler, prevPageHandler }) => {
  return (
    <div className={styles.gallery}>
      <button
        className={`${styles.btn} ${styles['btn-left']}`}
        onClick={prevPageHandler}
      >
        <Image src={larr} width={24} height={24} alt=""></Image>
      </button>
      {children}
      <button
        className={`${styles.btn} ${styles['btn-right']}`}
        onClick={nextPageHandler}
      >
        <Image src={rarr} width={24} height={24} alt=""></Image>
      </button>
    </div>
  );
};

export default Gallery;
