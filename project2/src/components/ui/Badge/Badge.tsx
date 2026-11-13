import styles from "./Badge.module.css";

type BadgeProps = {
  text: string;
  variant?: "blue" | "green" | "red" | "gray"; // optional, default below
};

function Badge({ text, variant = "blue" }: BadgeProps) {
  return <span className={`${styles.badge} ${styles[variant]}`}>{text}</span>;
}

export default Badge;