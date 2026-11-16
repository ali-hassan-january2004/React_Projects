export interface Question {
  id: number;
  text: string;
  options: string[];
  correctIndex: number;
}

export type QuizStatus = "start" | "playing" | "finished";
