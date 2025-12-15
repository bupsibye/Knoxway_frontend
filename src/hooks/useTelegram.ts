import { useEffect, useState } from 'react';

declare global {
  interface Window {
    Telegram?: any;
  }
}

export function useTelegram() {
  const [tg, setTg] = useState<any>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const telegram = window.Telegram?.WebApp;
    
    if (telegram) {
      // Инициализация Telegram WebApp
      telegram.ready();
      
      // Данные пользователя из initDataUnsafe
      const userData = telegram.initDataUnsafe?.user;
      setTg(telegram);
      setUser(userData);
      
      console.log('Telegram user:', userData);
    } else {
      console.log('Telegram WebApp not available');
    }
  }, []);

  return { tg, user };
}
