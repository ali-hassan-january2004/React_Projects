import type { FormErrors, StudentFormValues } from '../types/student'

export function validateStudent(values: StudentFormValues): FormErrors {
  const errors: FormErrors = {}

  if (!values.name.trim()) {
    errors.name = 'Name is required'
  } else if (values.name.trim().length < 3) {
    errors.name = 'Name must be at least 3 characters'
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address'
  }

  if (!values.age.trim()) {
    errors.age = 'Age is required'
  } else {
    const age = Number(values.age)
    if (!Number.isInteger(age) || age < 16 || age > 60) {
      errors.age = 'Age must be a whole number between 16 and 60'
    }
  }

  if (!values.course) {
    errors.course = 'Please select a course'
  }

  return errors
}