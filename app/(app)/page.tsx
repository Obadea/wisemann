"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { animate, stagger } from "motion"
import * as motion from "motion/react-client"

import AccordionDemo from "@/components/accordion-demo"
import CustomButton from "@/components/custom-button"
import FeatureCard from "@/components/features-card"
import PriceCard from "@/components/price-card"
import { Input } from "@/registry/new-york-v4/ui/input"

type Feature = {
  title: string
  description: string
  icon: string // Representing icon name or path if available
}

const freePlanFeatures = [
  "Create up to 3 projects",
  "Advanced analytics & reporting",
  "Cloud backups and sync",
  "Custom branding options",
  "Priority customer support",
]

const proPlanFeatures = [
  "Unlimited project creation",
  "Team management tools",
  "Advanced analytics & reporting",
  "Cloud backups and sync",
  "Custom branding options",
  "API access",
  "Early access to new features",
]
const proPlanFeatures2 = [
  "Unlimited project creation",
  "Real-time collaboration",
  "Priority customer support",
  "Access to premium templates",
  "Team management tools",
  "Advanced analytics & reporting",
  "Cloud backups and sync",
  "API access",
  "Early access to new features",
]

const features: Feature[] = [
  {
    title: "User information",
    description:
      "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
    icon: "/features/users.svg", // replace with actual icon reference
  },
  {
    title: "Deal tracking",
    description:
      "Worem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
    icon: "/features/deal.svg", // replace with actual icon reference
  },
  {
    title: "Pipeline management",
    description:
      "Dorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
    icon: "/features/pipeline.svg", // replace with actual icon reference
  },
  {
    title: "Reporting dashboard",
    description:
      "Yarem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
    icon: "/features/report.svg", // replace with actual icon reference
  },
  {
    title: "Meeting scheduling",
    description:
      "Bem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
    icon: "/features/meeting.svg", // replace with actual icon reference
  },
  {
    title: "Email tracking",
    description:
      "Keem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.",
    icon: "/features/email.svg", // replace with actual icon reference
  },
]

export default function SinkPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return

      // Hide the container until the fonts are loaded
      containerRef.current.style.visibility = "visible"

      const words = containerRef.current

      // Animate the words in the h1
      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.1),
        }
      )
    })
  }, [])
  return (
    <div className="mx-auto h-full w-full max-w-[1400px] gap-4 overflow-x-hidden bg-[#060B27] p-4 text-white">
      <div className="absolute top-[110px] -left-[270px] z-[2] h-[600px] w-[600px] rounded-full bg-radial from-[#7214ff38] via-[#060B27]/0 to-[#060B27]"></div>

      <div className="absolute top-[240px] -right-[400px] -z-[0] h-[800px] w-[800px] overflow-hidden rounded-full bg-radial from-[#32CAFD]/25 via-[#060B27]/0 to-[#060B27]"></div>

      <div
        className="invisible flex flex-col items-center gap-10 pt-9"
        ref={containerRef}
      >
        <h1 className="z-[3] bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text pb-1.5 text-center text-5xl font-bold text-transparent">
          A property management dashboard for landlords
        </h1>
        <p className="mx-auto max-w-4xl text-center text-[#8F9BB7]">
          Wisemann is the AI-powered, all-in-one real estate OS designed for
          those who own, manage, and scale property portfolios. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Et illum repellendus
          quod doloribus quis optio, nobis
        </p>
        <div className="flex w-full items-center justify-center gap-4">
          <CustomButton text="Join Waitlist" />
          <CustomButton
            text="View pricing"
            className="border bg-white/5 hover:bg-white/20"
          />
        </div>

        {/* Hero Image */}
        <div className="z-20">
          <Image
            alt="hero"
            src="/heroImage.svg"
            width={680}
            height={680}
            draggable={false}
          />
        </div>
      </div>

      <section className="mx-auto flex max-w-5xl flex-col items-center gap-10 pt-24 pb-16">
        <div className="grid grid-cols-[1.5fr_1fr] items-center justify-center gap-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0 },
            }}
            className="bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text pb-1.5 text-3xl font-bold text-transparent"
          >
            Powerful features to help you streamline your real estate operations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0 },
            }}
            className="place-self-end text-sm text-[#8F9BB7]"
          >
            Wisemann is the AI-powered, all-in-one real estate OS designed for
            Everything you need to streamline your real estate operations, all
            in one platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <FeatureCard
              description={feature.description}
              icon={feature.icon}
              title={feature.title}
              number={index}
              key={index}
            />
          ))}
        </div>
      </section>

      {/* Join Waitlist section */}
      <motion.section
        className="flex flex-col items-center justify-center py-16"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.2,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0 },
        }}
      >
        <div className="flex w-full max-w-3xl flex-col gap-5 rounded-xl border bg-[#0E1330] p-5">
          <p className="text-xl font-semibold">Join our waitlist</p>
          <Input
            placeholder="Enter your email "
            type="email"
            className="h-12 rounded-full"
          />
          <CustomButton text="Join Waitlist" className="w-full" />
        </div>
      </motion.section>

      <motion.section
        className="flex flex-col items-center justify-center gap-12 py-16"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.2,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0 },
        }}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0 },
            }}
            className="bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text pb-1.5 text-3xl font-bold text-transparent"
          >
            Choose the ideal plan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0 },
            }}
            className="max-w-2xl text-center text-sm text-[#8F9BB7]"
          >
            choose the idel plan Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. At quasi Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quasi, placeat excepturi
          </motion.p>
        </div>

        {/* Price  section  */}

        <div className="grid grid-cols-3 gap-6 lg:w-6xl">
          <PriceCard
            type="open source"
            price={0}
            pricingFeatures={freePlanFeatures}
            priceDescription="Built for the community."
            btnText="Coming soon"
          />
          <PriceCard
            type="advance"
            price={70000}
            pricingFeatures={proPlanFeatures}
            priceDescription="Lorem Isepum ui dui lor ifsi if jossd"
            btnText="Coming soon"
          />
          <PriceCard
            type="popular"
            price={90000}
            pricingFeatures={proPlanFeatures2}
            priceDescription="Lorem Isepum ui dui lor ifsi if jossd, enjoy more feaures"
            btnText="Coming soon"
          />
        </div>
      </motion.section>

      <motion.section
        className="flex flex-col items-center justify-center gap-12 py-16"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.2,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0 },
        }}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0 },
            }}
            className="bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text pb-1.5 text-3xl font-bold text-transparent"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0 },
            }}
            className="max-w-2xl text-center text-sm text-[#8F9BB7]"
          >
            Frequently asked Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. At quasi Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quasi, placeat excepturi
          </motion.p>
        </div>

        <div>
          <AccordionDemo />
        </div>
      </motion.section>
    </div>
  )
}
