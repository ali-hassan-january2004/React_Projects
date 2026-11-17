import { useRef, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import type { FormErrors, Student, StudentFormValues } from '../types/student'
import { validateStudent } from '../utils/validation'

interface StudentFormProps {
  onAddStudent: (student: Student) => void
}

const initialValues: StudentFormValues = {
  name: '',
  email: '',
  age: '',
  course: '',
}

const courses = ['Web Development', 'Data Science', 'AI & Machine Learning', 'Cyber Security']

function StudentForm({ onAddStudent }: StudentFormProps) {
  const [values, setValues] = useState<StudentFormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [success, setSuccess] = useState(false)

  // Uncontrolled input: value is read from the DOM via ref
  const notesRef = useRef<HTMLTextAreaElement>(null)

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))

    // clear the error of the field being edited
    if (errors[name as keyof StudentFormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
    setSuccess(false)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const validationErrors = validateStudent(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) return

    const newStudent: Student = {
      id: crypto.randomUUID(),
      name: values.name.trim(),
      email: values.email.trim(),
      age: Number(values.age),
      course: values.course,
      notes: notesRef.current?.value.trim() ?? '',
    }

    onAddStudent(newStudent)

    // reset form
    setValues(initialValues)
    if (notesRef.current) notesRef.current.value = ''
    setSuccess(true)
  }

  const inputClass = (hasError: boolean) =>
    `w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 ${
      hasError
        ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-100'
        : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-100'
    }`

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_20px_60px_-32px_rgba(15,23,42,0.28)] sm:p-6"
    >
      <div className="border-b border-slate-100 pb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">New enrollment</p>
        <h2 id="registration-heading" className="mt-1 text-xl font-bold tracking-tight text-slate-950">
          Register a student
        </h2>
        <p className="mt-1 text-sm leading-5 text-slate-500">
          Add student details to the directory.
        </p>
      </div>

      {success && (
        <p role="status" className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
          Student registered successfully!
        </p>
      )}

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-slate-700">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          placeholder="Ali Hassan"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={inputClass(!!errors.name)}
        />
        {errors.name && <p id="name-error" className="mt-1.5 text-xs font-medium text-rose-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="ali@example.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={inputClass(!!errors.email)}
        />
        {errors.email && <p id="email-error" className="mt-1.5 text-xs font-medium text-rose-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="age" className="mb-1.5 block text-sm font-semibold text-slate-700">
          Age
        </label>
        <input
          id="age"
          name="age"
          type="number"
          min={16}
          max={60}
          step={1}
          value={values.age}
          onChange={handleChange}
          placeholder="20"
          aria-invalid={!!errors.age}
          aria-describedby={errors.age ? 'age-error' : undefined}
          className={inputClass(!!errors.age)}
        />
        {errors.age && <p id="age-error" className="mt-1.5 text-xs font-medium text-rose-600">{errors.age}</p>}
      </div>

      <div>
        <label htmlFor="course" className="mb-1.5 block text-sm font-semibold text-slate-700">
          Course
        </label>
        <select
          id="course"
          name="course"
          value={values.course}
          onChange={handleChange}
          aria-invalid={!!errors.course}
          aria-describedby={errors.course ? 'course-error' : undefined}
          className={inputClass(!!errors.course)}
        >
          <option value="">Select a course</option>
          {courses.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
        {errors.course && <p id="course-error" className="mt-1.5 text-xs font-medium text-rose-600">{errors.course}</p>}
      </div>

      <div>
        <label htmlFor="notes" className="mb-1.5 block text-sm font-semibold text-slate-700">
          Notes (optional)
        </label>
        <textarea
          id="notes"
          ref={notesRef}
          rows={3}
          placeholder="Anything extra..."
          className={`${inputClass(false)} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/15 transition hover:bg-indigo-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
      >
        Register student
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
          <path d="M10 4v12m6-6H4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </form>
  )
}

export default StudentForm