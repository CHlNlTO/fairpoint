import { ThemeSwitch } from "@/components/ui/theme-switch";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ThemeSwitch />
        <h1 className="text-4xl font-bold">Welcome to Fairpoint Software</h1>
        <p className="text-lg">
          Your trusted partner in accounting software solutions.
        </p>
      </main>
    </div>
  );
}
