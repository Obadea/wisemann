"use client"

import React from "react"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import * as motion from "motion/react-client"

interface FeatureCardProps {
  number: number
  title: string
  description: string
  icon: string | StaticImport
}

const FeatureCard = ({
  number,
  title,
  description,
  icon,
}: FeatureCardProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.1 + number * 0.1,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0 },
        }}
        className="flex flex-col gap-4 rounded-lg border bg-[#0E1330] py-5 pr-6 pl-5"
      >
        <Image src={icon} width={40} height={40} alt={title} />
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-sm text-[#8F9BB7]">{description}</p>
        </div>
      </motion.div>
    </>
  )
}

export default FeatureCard
