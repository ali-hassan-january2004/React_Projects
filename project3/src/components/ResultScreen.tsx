import styles from "../styles/ResultScreen.module.css";

interface ResultScreenProps {
  score: number;
  total: number;
  answers: number[];
  onRestart: () => void;
}

function getMessage(percentage: number): string {
  if (percentage === 100) return "Perfect score. You've got state down.";
  if (percentage >= 70) return "Great work. Just a few things to review.";
  if (percentage >= 40) return "Good start. Review the topics and try again.";
  return "Keep practicing. Go back through the lesson and retry.";
}

function ResultScreen({ score, total, answers, onRestart }: ResultScreenProps) {
  const percentage = Math.round((score / total) * 100); // derived value
  const wrong = answers.length - score;

  return (
    <section className={styles.screen}>
      <h1 className={styles.title}>Quiz complete</h1>

      <p className={styles.score}>
        {score}
        <span className={styles.outOf}> / {total}</span>
      </p>
      <p className={styles.percent}>{percentage}%</p>

      <p className={styles.message}>{getMessage(percentage)}</p>

      <div className={styles.summary}>
        <span>{score} correct</span>
        <span>{wrong} incorrect</span>
      </div>

      <button className={styles.button} onClick={onRestart}>
        Restart quiz
      </button>
    </section>
  );
}

export default ResultScreen;
