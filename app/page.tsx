'use client';

import { useState } from 'react';
import LaunchPage from '@/components/launch-page';
import MainPage from '@/components/main-page';

export default function Home() {
  const [isLaunched, setIsLaunched] = useState(false);

  return (
    <>
      {!isLaunched ? (
        <LaunchPage onLaunch={() => setIsLaunched(true)} />
      ) : (
        <MainPage />
      )}
    </>
  );
}
