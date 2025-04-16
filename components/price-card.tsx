import React from "react"
import { CheckIcon } from "lucide-react"

import { formatToNaira } from "@/lib/utils"
import { Separator } from "@/registry/new-york-v4/ui/separator"

import CustomButton from "./custom-button"

interface PriceCardProps {
  type: string
  price: number
  duration?: string
  priceDescription?: string
  btnText: string
  pricingFeatures: any[]
}

const PriceCard = ({
  type = "open source",
  price,
  duration = "month",
  priceDescription = "Built for the community.",
  btnText = "Coming soon",
  pricingFeatures,
}: PriceCardProps) => {
  return (
    <div className="flex min-h-20 w-full min-w-60 flex-col gap-2 rounded-md border bg-[#0E1330] px-6 py-7">
      <p className="text-sm text-[#8F9BB7] capitalize">{type}</p>
      <p className="text-2xl font-medium">
        {formatToNaira(price)}
        <span className="text-sm font-normal text-[#8F9BB7]">
          {price > 0 && `/${duration}`}
        </span>
      </p>
      <p className="text-base text-[#8F9BB7]">{priceDescription}</p>

      <Separator className="mt-9 mb-5" />

      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col gap-3">
          {pricingFeatures?.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckIcon className="size-5 text-green-500" />
              <p className="text-[#8F9BB7]">{item}</p>
            </div>
          ))}
        </div>

        <CustomButton disabled={true} text={btnText} className="mt-8" />
      </div>
    </div>
  )
}

export default PriceCard
