'use client';

import { FireworksBackground } from '@/components/animate-ui/backgrounds/fireworks';
import { Button } from '@/components/ui/button';
import { ThemeSwitch } from '@/components/ui/theme-switch';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function Home() {
  const { resolvedTheme: theme } = useTheme();

  return (
    <main className="flex items-start justify-center min-h-screen">
      {/* <main className="flex gap-[16px] flex-col row-start-2 items-center">
          <div className="z-50">
            <ThemeSwitch />
          </div>
          <div className="gap-0 z-50">
            <h1 className="text-4xl font-bold tracking-tighter">Fairpoint Software</h1>
            <p className="text-lg text-center">
              Coming Soon
            </p>
          </div>
          <FireworksBackground className="absolute inset-0 flex items-center justify-center rounded-xl" color={theme === 'dark' ? 'white' : 'black'} />
        </main> */}
      <div className="flex flex-col justify-start items-center gap-16">
        <div>
          <Image
            src="/logo.png"
            alt="Fairpoint Logo"
            width={300}
            height={300}
          />
        </div>
        <div className="z-50 space-y-8 flex flex-col items-center">
          <div className="z-50 flex flex-col items-center justify-center">
            <h1 className="text-7xl font-bold tracking-tighter">
              Welcome, Juan!
            </h1>
          </div>
          <div className="flex flex-row justify-center gap-4 z-50">
            <div className="">
              <Button variant={'outline'} className="tracking-wide">
                Skip for now
              </Button>
            </div>
            <div>
              <Button variant={'default'} className="tracking-wide">
                Finish your profile
              </Button>
            </div>
          </div>
          <div className="z-50">
            <ThemeSwitch />
          </div>
        </div>
        <FireworksBackground
          className="absolute inset-0 flex items-center justify-center rounded-xl"
          color={theme === 'dark' ? 'white' : 'black'}
        />
      </div>
    </main>
  );
}
