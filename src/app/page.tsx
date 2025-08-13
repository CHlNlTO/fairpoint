'use client';

import { FireworksBackground } from "@/components/animate-ui/backgrounds/fireworks";
import { ThemeSwitch } from "@/components/ui/theme-switch";
import { useTheme } from 'next-themes';

export default function Home() {
  const { resolvedTheme: theme } = useTheme();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex gap-[16px] flex-col row-start-2 items-center">
          <div className="z-50">
            <ThemeSwitch />
          </div>
          <div className="gap-0 z-50">
            <h1 className="text-4xl font-bold tracking-tighter">Fairpoint Software</h1>
            {/* <p className="text-lg text-center z-50">
              Your trusted partner in accounting software solutions.
            </p> */}
            <p className="text-lg text-center">
              Coming Soon
            </p>
          </div>
          <FireworksBackground className="absolute inset-0 flex items-center justify-center rounded-xl" color={theme === 'dark' ? 'white' : 'black'} />
        </main>
      </div>
  );
}
