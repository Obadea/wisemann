import React from "react"
import Image from "next/image"

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image width={30} height={30} src={"/logo.svg"} alt="logo" />
      <p className="text-xl font-bold">
        Wisemann<span className="text-[#7214FF]">.</span>
      </p>
    </div>
  )
}

export default Logo
