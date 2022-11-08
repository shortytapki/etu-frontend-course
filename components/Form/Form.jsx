import styles from './Form.module.css';

const Form = ({
  bandName,
  url,
  submitHandler,
  nameChangeHandler,
  urlChangeHnadler,
}) => {
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <input
        type="text"
        value={bandName}
        onChange={(e) => nameChangeHandler(e.target.value)}
        placeholder="Name of the band"
      />
      <input
        type="text"
        value={url}
        onChange={(e) => urlChangeHnadler(e.target.value)}
        placeholder="Image url"
      />
      <button type="submit" className={`gradient ${styles.submitbtn}`}>
        Submit
      </button>
    </form>
  );
};

export default Form;
