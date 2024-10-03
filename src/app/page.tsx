// "use client";

import { Navbar } from "@/components/layout/Navbar";
import { fontSans } from "@/config/fonts";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import clsx from "clsx";

export default function Home() {
  return (
    <div
      // className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      className={clsx("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
      <Navbar />
      <div className="w-full mx-auto mt-10 flex h-full items-center">
        <div className="flex flex-col gap-2">
          <Input type="email" label="Email" placeholder="Enter your email" />

          <Button color="danger">Button</Button>
        </div>
      </div>
    </div>
  );
}
