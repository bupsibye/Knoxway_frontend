import React, { useState } from 'react';

export const ExchangePage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleSendRequest = () => {
    if (!username.trim()) return;
    // позже здесь будет запрос на бэкенд
    setStatus(`Предложение обмена отправлено @${username}`);
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>Обмен подарками</h2>
      <p>Введите username пользователя, с которым хотите начать обмен.</p>
      <input
        type="text"
        placeholder="@username"
        value={username}
        onChange={(e) => setUsername(e.target.value.replace('@', ''))}
        style={{
          width: '100%',
          padding: 8,
          borderRadius: 8,
          border: '1px solid #ccc',
          marginBottom: 8,
        }}
      />
      <button
        onClick={handleSendRequest}
        style={{
          width: '100%',
          padding: 10,
          borderRadius: 8,
          border: 'none',
          background: '#0088cc',
          color: '#fff',
          fontWeight: 600,
        }}
      >
        Отправить предложение обмена
      </button>
      {status && <p style={{ marginTop: 12 }}>{status}</p>}
    </div>
  );
};