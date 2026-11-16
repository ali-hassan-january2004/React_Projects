import type { Question } from "../types/quiz";

export const questions: Question[] = [
  {
    id: 1,
    text: "Which hook adds state to a function component?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    correctIndex: 1,
  },
  {
    id: 2,
    text: "What happens when you call a state setter function?",
    options: [
      "The page fully reloads",
      "The variable changes instantly",
      "React schedules a re-render with the new value",
      "Nothing until you call render()",
    ],
    correctIndex: 2,
  },
  {
    id: 3,
    text: "Which is the correct way to add an item to an array in state?",
    options: [
      "items.push(newItem)",
      "setItems(items.push(newItem))",
      "setItems([...items, newItem])",
      "items = [...items, newItem]",
    ],
    correctIndex: 2,
  },
  {
    id: 4,
    text: "Which update is safest when the new state depends on the previous one?",
    options: [
      "setCount(count + 1)",
      "setCount(prev => prev + 1)",
      "count++",
      "setCount(++count)",
    ],
    correctIndex: 1,
  },
  {
    id: 5,
    text: "Where is it allowed to call a hook?",
    options: [
      "Inside loops",
      "Inside if statements",
      "At the top level of a component",
      "Inside regular event handlers",
    ],
    correctIndex: 2,
  },
  {
    id: 6,
    text: "Which expression renders <Badge /> only when isNew is true?",
    options: [
      "{isNew && <Badge />}",
      "{isNew || <Badge />}",
      "{if (isNew) <Badge />}",
      "{isNew ? <Badge />}",
    ],
    correctIndex: 0,
  },
  {
    id: 7,
    text: "What is the correct TypeScript type for a click event on a button?",
    options: [
      "React.ClickEvent",
      "React.MouseEvent<HTMLButtonElement>",
      "MouseEvent<Button>",
      "React.ButtonEvent",
    ],
    correctIndex: 1,
  },
  {
    id: 8,
    text: "Which of these should be derived instead of stored in state?",
    options: [
      "The current question index",
      "The selected option",
      "The score percentage",
      "The quiz status",
    ],
    correctIndex: 2,
  },
];
