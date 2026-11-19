type StatCardProps = {
  label: string;
  value: string | number;
  icon: string;
  detail: string;
};

export default function StatCard({ label, value, icon, detail }: StatCardProps) {
  return (
    <article className="stat-card">
      <div className="stat-card-heading">
        <span className="stat-card-label">{label}</span>
        <span className="stat-icon" aria-hidden="true">{icon}</span>
      </div>
      <strong className="stat-value">{value}</strong>
      <div className="stat-card-footer">
        <span className="stat-period">{detail}</span>
      </div>
    </article>
  );
}