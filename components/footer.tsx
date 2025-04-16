import React from "react"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import * as motion from "motion/react-client"

import { Input } from "@/registry/new-york-v4/ui/input"
import { Separator } from "@/registry/new-york-v4/ui/separator"

import CustomButton from "./custom-button"
import Logo from "./logo"

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0 },
      }}
      className="mt-10 flex min-h-64 w-full flex-col bg-[url('/bg-footer.png')] bg-cover bg-center pb-8 text-white"
    >
      <div className="mx-auto mt-14 w-full max-w-6xl overflow-hidden">
        <div className="grid grid-cols-[0.6fr_1fr] gap-6">
          <div className="space-y-8">
            <Logo />
            <div className="flex flex-col gap-4 rounded-lg border bg-[#0E1330] p-7">
              <p className="my-2 text-xl font-semibold">Join our waitlist</p>
              <Input
                placeholder="Enter your email"
                className="h-10 rounded-full border bg-transparent"
              />
              <CustomButton text="Join Waitlist" className="h-10" />
            </div>
          </div>

          <div className="flex items-end justify-between gap-4">
            <div></div>

            <div className="flex flex-col gap-2">
              <p className="m mb-3.5 text-lg">Legal</p>
              <Link
                href={"/"}
                className="text-sm text-[#8F9BB7] hover:text-white hover:underline"
              >
                Terms
              </Link>
              <Link
                href={"/"}
                className="text-sm text-[#8F9BB7] hover:text-white hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href={"/"}
                className="text-sm text-[#8F9BB7] hover:text-white hover:underline"
              >
                License
              </Link>
            </div>
          </div>
        </div>
        <Separator className="my-10" />
        <div className="flex justify-between gap-4">
          <p className="text-sm text-[#8F9BB7]">Copyright © Wisemann | 2025</p>

          <div className="flex gap-3.5">
            <Link href="/" className="rounded-sm border p-1">
              <Facebook className="size-5.5 fill-[#8F9BB7] stroke-none" />
            </Link>
            <Link href="/" className="rounded-sm border p-1">
              <Twitter className="size-5.5 fill-[#8F9BB7] stroke-none" />
            </Link>
            <Link href="/" className="rounded-sm border p-1">
              <Linkedin className="size-5.5 fill-[#8F9BB7] stroke-none" />
            </Link>
            <Link href="/" className="rounded-sm border p-1">
              <Instagram className="size-5.5 fill-[#8F9BB7] stroke-[#060B27]" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Footer
