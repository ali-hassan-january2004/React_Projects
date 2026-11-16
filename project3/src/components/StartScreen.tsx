import styles from "../styles/StartScreen.module.css";

interface StartScreenProps {
  totalQuestions: number;
  onStart: () => void;
}

function StartScreen({ totalQuestions, onStart }: StartScreenProps) {
  return (
    <section className={styles.screen}>
      <p className={styles.eyebrow}>A QUICK KNOWLEDGE CHECK</p>
      <div className={styles.mark} aria-hidden="true">
        {"</>"}
      </div>
      <h1 className={styles.title}>React State Quiz</h1>
      <p className={styles.text}>
        Test what you learned about state, events and conditional rendering.
      </p>
      <p className={styles.meta}>
        <span className={styles.metaDot} />
        {totalQuestions} questions <span className={styles.metaDivider}>·</span> about 3 minutes
      </p>
      <button className={styles.button} onClick={onStart}>
        Start the quiz <span aria-hidden="true">→</span>
      </button>
      <p className={styles.note}>Choose an answer to see instant feedback</p>
    </section>
  );
}

export default StartScreen;
