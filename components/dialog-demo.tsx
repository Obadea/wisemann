"use client"

import { useState } from "react"
import { Menu } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york-v4/ui/dialog"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"

import CustomButton from "./custom-button"

export function DialogDemo() {
  return (
    <div className="flex h-fit items-center justify-center gap-4">
      <DialogWithForm className="hidden lg:flex" />
      <DialogScrollableContent className="flex lg:hidden" />
      {/* <DialogWithStickyFooter /> */}
    </div>
  )
}

function DialogWithForm({ className }: { className?: string }) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <CustomButton
            text="Join Waitlist"
            className={`h-9 min-w-[110] text-sm lg:h-12 lg:text-base ${className}`}
          />
        </DialogTrigger>
        <DialogContent className="bg-[#0E1330] sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Join Waitlist</DialogTitle>
            <DialogDescription>
              Be the first to know when we launch. Get early access and
              exclusive updates.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="email-1">Email</Label>
              <Input
                id="email-1"
                name="email"
                placeholder="example@gmail.oom"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              type="submit"
              className="bg-[#7214FF] text-white hover:bg-[#7214ff]/80"
            >
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

function DialogScrollableContent({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog onOpenChange={setOpen}>
      <DialogTrigger asChild className="flex items-center justify-center">
        <Button variant="outline" className={` ${className}`}>
          <Menu />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Scrollable Content</DialogTitle>
          <DialogDescription>
            This is a dialog with scrollable content.
          </DialogDescription>
        </DialogHeader>
        <div className="-mx-6 max-h-[500px] overflow-y-auto px-6 text-sm">
          <h4 className="mb-4 text-lg leading-none font-medium">Lorem Ipsum</h4>
          {Array.from({ length: 10 }).map((_, index) => (
            <p key={index} className="mb-4 leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

function DialogWithStickyFooter() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Sticky Footer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Scrollable Content</DialogTitle>
          <DialogDescription>
            This is a dialog with scrollable content.
          </DialogDescription>
        </DialogHeader>
        <div className="-mx-6 max-h-[500px] overflow-y-auto px-6 text-sm">
          <h4 className="mb-4 text-lg leading-none font-medium">Lorem Ipsum</h4>
          {Array.from({ length: 10 }).map((_, index) => (
            <p key={index} className="mb-4 leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          ))}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
