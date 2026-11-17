import type { Student } from '../types/student'

interface StudentTableProps {
  students: Student[]
  query: string
  onDeleteStudent: (id: string) => void
}

function StudentTable({ students, query, onDeleteStudent }: StudentTableProps) {
  if (students.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white/80 px-6 py-14 text-center shadow-sm">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m16 0v-2a4 4 0 0 0-3-3.87M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8-7.87a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-4 text-sm font-semibold text-slate-900">
          {query.trim() ? 'No matching students' : 'Your directory is ready'}
        </h3>
        <p className="mx-auto mt-1 max-w-sm text-sm leading-6 text-slate-500">
          {query.trim()
            ? 'Try another name, email, or course, or clear your search.'
            : 'Registered students will appear here. Use the form to add your first student.'}
        </p>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_20px_60px_-36px_rgba(15,23,42,0.3)]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="bg-slate-50 text-[11px] uppercase tracking-[0.12em] text-slate-500">
            <tr>
              <th scope="col" className="px-5 py-4 font-semibold">Student</th>
              <th scope="col" className="px-5 py-4 font-semibold">Email</th>
              <th scope="col" className="px-5 py-4 font-semibold">Age</th>
              <th scope="col" className="px-5 py-4 font-semibold">Course</th>
              <th scope="col" className="px-5 py-4 font-semibold">Notes</th>
              <th scope="col" className="px-5 py-4 text-right font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {students.map((student) => (
              <tr key={student.id} className="transition-colors hover:bg-slate-50/80">
                <td className="whitespace-nowrap px-5 py-4 font-semibold text-slate-900">{student.name}</td>
                <td className="whitespace-nowrap px-5 py-4 text-slate-600">{student.email}</td>
                <td className="px-5 py-4 text-slate-600">{student.age}</td>
                <td className="whitespace-nowrap px-5 py-4">
                  <span className="rounded-lg bg-indigo-50 px-2.5 py-1.5 text-xs font-semibold text-indigo-700">
                    {student.course}
                  </span>
                </td>
                <td className="max-w-48 truncate px-5 py-4 text-slate-500" title={student.notes || undefined}>
                  {student.notes || <span className="text-slate-300">—</span>}
                </td>
                <td className="px-5 py-4 text-right">
                  <button
                    type="button"
                    onClick={() => onDeleteStudent(student.id)}
                    aria-label={`Delete ${student.name}`}
                    className="rounded-lg px-3 py-2 text-xs font-semibold text-rose-600 transition hover:bg-rose-50 hover:text-rose-700 focus-visible:outline-2 focus-visible:outline-rose-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StudentTable