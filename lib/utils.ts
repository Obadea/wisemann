import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export function formatToNaira(amount: number): string {
  if (amount === 0) return "Free"

  return (
    "₦" +
    amount.toLocaleString("en-NG", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  )
}

export const handleScroll = (divId: string) => {
  const target = document.getElementById(divId)
  target?.scrollIntoView({ behavior: "smooth" })
}
