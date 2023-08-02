import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_HOST}${path}`
}

// export const absoluteUrl = (path: string) => {
//   const url = new URL(path, process.env.NEXT_PUBLIC_HOST ?? "https://geniusly.ai")
//   return url.toString()
// }