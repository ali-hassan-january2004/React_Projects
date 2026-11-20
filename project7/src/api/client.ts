const BASE_URL = (import.meta.env.VITE_API_URL || 'https://dummyjson.com').replace(
  /\/+$/,
  '',
)

export class ApiError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

export async function request<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })

  if (!res.ok) {
    let message = `Request failed (${res.status})`
    try {
      const body = await res.json()
      if (body?.message) message = body.message
    } catch {
      // response had no JSON body, keep the default message
    }
    throw new ApiError(message, res.status)
  }

  return res.json() as Promise<T>
}