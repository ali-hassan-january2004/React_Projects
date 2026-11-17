export interface Student {
  id: string
  name: string
  email: string
  age: number
  course: string
  notes: string
}

export interface StudentFormValues {
  name: string
  email: string
  age: string
  course: string
}

export type FormErrors = Partial<Record<keyof StudentFormValues, string>>