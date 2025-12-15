import React, { useState } from 'react';

export const ExchangePage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const testUsers = [
    { id: 7626757547, username: 'xaroca' },
    { id: 7203050773, username: 'knifenrose' },
  ];

  const getMockSender = (toUsernameRaw: string) => {
    const clean = toUsernameRaw.replace(/^@/, '').toLowerCase();
    if (clean === 'xaroca') {
      return testUsers[1]; // отправитель knifenrose
    }
    if (clean === 'knifenrose') {
      return testUsers[0]; // отправитель xaroca
    }
    return testUsers[0];
  };

  const handleSend = async () => {
    setStatus(null);

    if (!username.trim()) {
      setStatus('Введите username второго участника');
      return;
    }

    const toUsername = username.trim();
    const sender = getMockSender(toUsername);

    try {
      const res = await fetch('https://knoxway-backend.onrender.com/api/exchange/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fromUserId: sender.id,
          fromUsername: sender.username,
          toUsername,
        }),
      });

      const data = await res.json().catch(() => null as any);

      if (!res.ok) {
        setStatus(
          data?.message ||
            data?.error ||
            `Ошибка: ${res.status} ${res.statusText || ''}`.trim()
        );
        return;
      }

      setStatus(
        `Предложение от @${sender.username} к ${toUsername} отправлено. Проверь сообщения у второго бота.`
      );
    } catch (e) {
      setStatus('Не удалось связаться с сервером');
    }
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>Обмен подарками</h2>

      <p style={{ fontSize: 13, marginTop: 4 }}>
        Для теста используй @xaroca и @knifenrose. Если вводишь @xaroca, отправителем будет
        @knifenrose, и наоборот.
      </p>

      <div style={{ marginTop: 16 }}>
        <label>
          Username второго участника:
          <input
            style={{ width: '100%', marginTop: 8, padding: 4 }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="@xaroca или @knifenrose"
          />
        </label>
      </div>

      <button
        style={{ marginTop: 12, padding: 8, borderRadius: 6 }}
        onClick={handleSend}
      >
        Отправить предложение
      </button>

      {status && (
        <p style={{ marginTop: 12, fontSize: 14 }}>
          {status}
        </p>
      )}
    </div>
  );
};
