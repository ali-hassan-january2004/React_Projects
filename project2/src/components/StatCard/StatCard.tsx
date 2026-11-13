import Card from "../ui/Card/Card";
import styles from "./StatCard.module.css";

type StatCardProps = {
  label: string;
  value: number | string;
  icon: string;
};

function StatCard({ label, value, icon }: StatCardProps) {
  return (
    <Card>
      <div className={styles.row}>
        <span className={styles.icon}>{icon}</span>
        <div>
          <p className={styles.value}>{value}</p>
          <p className={styles.label}>{label}</p>
        </div>
      </div>
    </Card>
  );
}

export default StatCard;