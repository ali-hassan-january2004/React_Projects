import SkillBadge from './SkillBadge'
import '../styles/Skills.css'

type SkillGroup = {
  title: string
  description: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Building responsive, accessible interfaces.',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
  },
  {
    title: 'Tools',
    description: 'The everyday setup I work with.',
    skills: ['Git', 'GitHub', 'VS Code', 'Vite', 'npm'],
  },
  {
    title: 'AI & Data',
    description: 'Where my interest in machine learning comes in.',
    skills: ['Python', 'Machine learning basics', 'Prompt writing'],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills__header">
          <h2 className="section-heading">Skills</h2>
          <p className="section-intro">
            A snapshot of what I use to design, build, and ship small projects.
          </p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skills__group">
              <h3 className="skills__group-title">{group.title}</h3>
              <p className="skills__group-text">{group.description}</p>
              <ul className="skills__list">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
