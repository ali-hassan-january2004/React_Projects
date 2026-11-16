import styles from "../styles/ProgressBar.module.css";

interface ProgressBarProps {
  current: number;
  total: number;
}

function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = (current / total) * 100; // derived value

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <p className={styles.kicker}>REACT STATE QUIZ</p>
        <p className={styles.label}>
          <span>{String(current).padStart(2, "0")}</span> / {String(total).padStart(2, "0")}
        </p>
      </div>
      <div
        className={styles.track}
        role="progressbar"
        aria-label="Quiz progress"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={current}
      >
        <div className={styles.fill} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

export default ProgressBar;
