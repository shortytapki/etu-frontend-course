import styles from './Text.module.css';

const Text = ({ children }) => {
  return <p className={styles.text}>{children}</p>;
};

export default Text;
