"use client"

import React from "react"

import { handleScroll } from "@/lib/utils"

const NavmenuItems = () => {
  return (
    <div>
      <div className="hidden items-center gap-4 lg:flex">
        <p
          className="cursor-pointer hover:underline"
          onClick={() => handleScroll("home")}
        >
          Home
        </p>
        <p
          className="cursor-pointer hover:underline"
          onClick={() => handleScroll("features")}
        >
          Features
        </p>
        <p
          className="cursor-pointer hover:underline"
          onClick={() => handleScroll("pricing")}
        >
          Pricing
        </p>
        <p
          className="cursor-pointer hover:underline"
          onClick={() => handleScroll("faq")}
        >
          FAQ
        </p>
        {/* <p className="cursor-pointer hover:underline">Blog</p> */}
      </div>
    </div>
  )
}
export default NavmenuItems
