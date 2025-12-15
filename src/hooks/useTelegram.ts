import { useEffect, useState } from 'react';

declare global {
  interface Window {
    Telegram?: any;
  }
}

export function useTelegram() {
  const [tg, setTg] = useState<any | null>(null);
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const webApp = window.Telegram?.WebApp;

    if (!webApp) {
      console.log('Telegram WebApp not found (вероятно, открыто в браузере)');
      return;
    }

    setTg(webApp);
    webApp.ready();

    if (webApp.initDataUnsafe && webApp.initDataUnsafe.user) {
      setUser(webApp.initDataUnsafe.user);
    } else {
      console.log('No user in initDataUnsafe', webApp.initDataUnsafe);
    }
  }, []);

  return { tg, user };
}
