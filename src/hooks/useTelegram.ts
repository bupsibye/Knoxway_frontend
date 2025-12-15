import { useEffect, useState } from 'react';

declare global {
  interface Window {
    Telegram?: any;
  }
}

export function useTelegram() {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;

    tg.ready();

    if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
      setUser(tg.initDataUnsafe.user);
    }
  }, []);

  return { user };
}
