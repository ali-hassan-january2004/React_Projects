import type { Question } from "../types/quiz";
import OptionButton from "./OptionButton";
import type { OptionState } from "./OptionButton";
import styles from "../styles/QuestionCard.module.css";

interface QuestionCardProps {
  question: Question;
  selectedOption: number | null;
  isLastQuestion: boolean;
  onSelect: (index: number) => void;
  onNext: () => void;
}

const LETTERS = ["A", "B", "C", "D"];

function QuestionCard({
  question,
  selectedOption,
  isLastQuestion,
  onSelect,
  onNext,
}: QuestionCardProps) {
  const isAnswered = selectedOption !== null;
  const isCorrect = selectedOption === question.correctIndex;

  const getState = (index: number): OptionState => {
    if (!isAnswered) return "idle";
    if (index === question.correctIndex) return "correct";
    if (index === selectedOption) return "wrong";
    return "dimmed";
  };

  return (
    <section className={styles.card}>
      <h2 className={styles.question}>{question.text}</h2>

      <div className={styles.options}>
        {question.options.map((option, index) => (
          <OptionButton
            key={index}
            label={option}
            letter={LETTERS[index]}
            state={getState(index)}
            disabled={isAnswered}
            onClick={() => onSelect(index)}
          />
        ))}
      </div>

      {isAnswered && (
        <p className={isCorrect ? styles.right : styles.incorrect}>
          {isCorrect
            ? "Correct!"
            : `Not quite. The answer is "${question.options[question.correctIndex]}".`}
        </p>
      )}

      <button className={styles.next} onClick={onNext} disabled={!isAnswered}>
        {isLastQuestion ? "See results" : "Next question"}
      </button>
    </section>
  );
}

export default QuestionCard;
