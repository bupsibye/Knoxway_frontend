import { useEffect, useState } from 'react';

export function useTelegram() {
  const [webApp, setWebApp] = useState<WebApp | null>(null);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const app = window.Telegram.WebApp;
      app.expand();
      setWebApp(app);
    }
  }, []);

  const user = webApp?.initDataUnsafe.user;

  return { webApp, user };
}