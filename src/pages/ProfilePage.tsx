import React, { useEffect, useState } from 'react';

export const ProfilePage: React.FC = () => {
  const [debug, setDebug] = useState<string>('');

  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;
    if (!tg) {
      setDebug('Telegram.WebApp not found');
      return;
    }

    tg.ready();
    setDebug(JSON.stringify(tg.initDataUnsafe || {}, null, 2));
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h2>Профиль (debug)</h2>
      <pre
        style={{
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          fontSize: 10,
        }}
      >
        {debug || 'Ждём данные...'}
      </pre>
    </div>
  );
};
