import { useState } from "react";
import { questions } from "./data/questions";
import type { QuizStatus } from "./types/quiz";
import StartScreen from "./components/StartScreen";
import ProgressBar from "./components/ProgressBar";
import QuestionCard from "./components/QuestionCard";
import ResultScreen from "./components/ResultScreen";
import styles from "./styles/App.module.css";

function App() {
  // ---- State ----
  const [status, setStatus] = useState<QuizStatus>("start");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);

  // ---- Derived values (not state) ----
  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  // ---- Handlers ----
  const handleStart = () => {
    setStatus("playing");
  };

  const handleSelect = (optionIndex: number) => {
    if (selectedOption !== null) return; // already answered

    setSelectedOption(optionIndex);
    setAnswers((prev) => [...prev, optionIndex]); // no mutation

    if (optionIndex === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1); // functional update
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setStatus("finished");
      return;
    }
    setCurrentIndex((prev) => prev + 1);
    setSelectedOption(null);
  };

  const handleRestart = () => {
    setStatus("start");
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setAnswers([]);
  };

  // ---- Early returns: one screen per status ----
  if (status === "start") {
    return (
      <main className={styles.app}>
        <StartScreen totalQuestions={questions.length} onStart={handleStart} />
      </main>
    );
  }

  if (status === "finished") {
    return (
      <main className={styles.app}>
        <ResultScreen
          score={score}
          total={questions.length}
          answers={answers}
          onRestart={handleRestart}
        />
      </main>
    );
  }

  return (
    <main className={styles.app}>
      <ProgressBar current={currentIndex + 1} total={questions.length} />
      <QuestionCard
        question={currentQuestion}
        selectedOption={selectedOption}
        isLastQuestion={isLastQuestion}
        onSelect={handleSelect}
        onNext={handleNext}
      />
    </main>
  );
}

export default App;
