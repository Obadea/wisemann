import { cookies } from "next/headers"

import CustomButton from "@/components/custom-button"
import Logo from "@/components/logo"
import NavmenuItems from "@/components/nav-menu-items"

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()

  return (
    <div className="flex w-full flex-col bg-[#060B27]">
      <header className="inset-x-0 top-0 isolate z-[2] mx-auto flex w-full max-w-[1400px] shrink-0 items-center justify-between gap-2 bg-[#060B27] px-4 py-5">
        <Logo />
        <NavmenuItems />
        <CustomButton text="Join Waitlist" className="rounded-full" />
      </header>
      <div className="w-full border-b" />
      <main className="overflow-x-hidden">{children}</main>
    </div>
  )
}
