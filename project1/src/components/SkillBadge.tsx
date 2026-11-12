type SkillBadgeProps = {
  name: string
}

function SkillBadge({ name }: SkillBadgeProps) {
  return <li className="skill-badge">{name}</li>
}

export default SkillBadge
