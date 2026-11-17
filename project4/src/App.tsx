import { useState } from 'react'
import type { Student } from './types/student'
import StudentForm from './components/StudentForm'
import StudentTable from './components/StudentTable'
import SearchBar from './components/SearchBar'

function App() {
  const [students, setStudents] = useState<Student[]>([])
  const [query, setQuery] = useState('')

  function handleAddStudent(student: Student) {
    setStudents((prev) => [...prev, student])
  }

  function handleDeleteStudent(id: string) {
    setStudents((prev) => prev.filter((s) => s.id !== id))
  }

  // derived value: no extra state needed
  const filteredStudents = students.filter((s) => {
    const q = query.toLowerCase().trim()
    return (
      s.name.toLowerCase().includes(q) ||
      s.email.toLowerCase().includes(q) ||
      s.course.toLowerCase().includes(q)
    )
  })

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-6 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Student portal
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Registration workspace
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Manage enrollment, keep student details organized, and find records in seconds.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-white bg-white/80 px-4 py-3 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m16 0v-2a4 4 0 0 0-3-3.87M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8-7.87a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">Total enrolled</p>
              <p className="text-lg font-semibold leading-6 text-slate-900">{students.length} students</p>
            </div>
          </div>
        </header>

        <main className="grid items-start gap-6 lg:grid-cols-12 lg:gap-8">
          <section aria-labelledby="registration-heading" className="lg:col-span-4">
            <StudentForm onAddStudent={handleAddStudent} />
          </section>

          <section aria-labelledby="students-heading" className="space-y-5 lg:col-span-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">
                  Directory
                </p>
                <h2 id="students-heading" className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
                  Registered students
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Showing {filteredStudents.length} of {students.length} {students.length === 1 ? 'student' : 'students'}
                </p>
              </div>
              <span className="w-fit rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">
                {filteredStudents.length} {filteredStudents.length === 1 ? 'result' : 'results'}
              </span>
            </div>
            <SearchBar query={query} onSearchChange={setQuery} />
            <StudentTable
              students={filteredStudents}
              query={query}
              onDeleteStudent={handleDeleteStudent}
            />
          </section>
        </main>
      </div>
    </div>
  )
}

export default App