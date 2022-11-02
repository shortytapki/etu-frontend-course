import styles from './Gallery.module.css';

const Gallery = ({ children }) => {
  return <div className={styles.gallery}>{children}</div>;
};

export default Gallery;
