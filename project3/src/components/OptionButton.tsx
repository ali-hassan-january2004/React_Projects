import styles from "../styles/OptionButton.module.css";

export type OptionState = "idle" | "correct" | "wrong" | "dimmed";

interface OptionButtonProps {
  label: string;
  letter: string;
  state: OptionState;
  disabled: boolean;
  onClick: () => void;
}

function OptionButton({
  label,
  letter,
  state,
  disabled,
  onClick,
}: OptionButtonProps) {
  return (
    <button
      className={`${styles.option} ${styles[state]}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles.letter}>{letter}</span>
      <span>{label}</span>
    </button>
  );
}

export default OptionButton;
