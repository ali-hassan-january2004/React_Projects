import styles from "./Button.module.css";

type ButtonProps = {
  label: string;
  variant?: "primary" | "danger" | "outline";
  size?: "small" | "medium";
  disabled?: boolean;
  onClick?: () => void;
};

function Button({
  label,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;