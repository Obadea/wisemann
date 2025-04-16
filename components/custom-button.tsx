import React from "react"

import { Button } from "@/registry/new-york-v4/ui/button"

interface CustomButtonProps {
  text: string
  className?: string
  disabled?: boolean
}

const CustomButton = ({ text, className, disabled }: CustomButtonProps) => {
  return (
    <Button
      disabled={disabled}
      className={`h-12 min-w-[135] cursor-pointer rounded-full bg-[#7214FF] text-white hover:bg-[#7214ff]/80 ${className} `}
    >
      {text}
    </Button>
  )
}

export default CustomButton
