import React, { useState, useEffect } from 'react';
import { useTelegram } from '../hooks/useTelegram';

const API_URL = import.meta.env.VITE_API_URL || 'https://knoxway-backend.onrender.com';

function getExchangeIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('exchangeId');
}

export const ExchangePage: React.FC = () => {
  const { user } = useTelegram();
  const [toUsername, setToUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [exchangeId, setExchangeId] = useState<string | null>(null);

  useEffect(() => {
    setExchangeId(getExchangeIdFromUrl());
  }, []);

  const handleSendRequest = async () => {
    if (!user) {
      setMessage('Не удалось получить данные Telegram пользователя');
      return;
    }
    if (!toUsername.trim()) {
      setMessage('Введите username второго участника');
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch(`${API_URL}/api/exchange/request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fromUserId: user.id,
          fromUsername: user.username,
          toUsername
        })
      });

      const data = await res.json();
      if (!res.ok) {
        setMessage(data.error || 'Ошибка при отправке предложения');
      } else {
        setMessage('Предложение на обмен отправлено ✅');
      }
    } catch (e) {
      setMessage('Сетевая ошибка, попробуйте ещё раз');
    } finally {
      setLoading(false);
    }
  };

  // если есть exchangeId в урле — показываем экран обмена (заглушка по твоему макету)
  if (exchangeId) {
    return (
      <div style={{ padding: 16 }}>
        <h2>Обмен между:</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: '#ddd',
                margin: '0 auto 8px'
              }}
            />
            <div>id / @username1</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: '#ddd',
                margin: '0 auto 8px'
              }}
            />
            <div>id / @username2</div>
          </div>
        </div>

        <hr />

        <div style={{ display: 'flex', marginTop: 16 }}>
          <div style={{ flex: 1 }}>
            <GiftGrid title="Подарки пользователя 1" />
          </div>
          <div style={{ width: 1, background: '#ccc', margin: '0 8px' }} />
          <div style={{ flex: 1 }}>
            <GiftGrid title="Подарки пользователя 2" />
          </div>
        </div>

        <hr style={{ marginTop: 16 }} />

        <div style={{ marginTop: 16 }}>
          <h3>Ваши подарки:</h3>
          <GiftGrid title="" />
        </div>

        <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
          <button style={{ flex: 1 }}>Подтвердить</button>
          <button style={{ flex: 1 }}>Отклонить</button>
        </div>
      </div>
    );
  }

  // экран отправки предложения
  return (
    <div style={{ padding: 16 }}>
      <h2>Обмен подарками</h2>
      <div style={{ marginBottom: 8 }}>
        <label>
          Username второго участника:
          <input
            type="text"
            placeholder="@username"
            value={toUsername}
            onChange={(e) => setToUsername(e.target.value)}
            style={{ display: 'block', marginTop: 4, width: '100%' }}
          />
        </label>
      </div>
      <button onClick={handleSendRequest} disabled={loading}>
        {loading ? 'Отправка...' : 'Отправить предложение'}
      </button>
      {message && <p style={{ marginTop: 8 }}>{message}</p>}
    </div>
  );
};

const GiftGrid: React.FC<{ title: string }> = ({ title }) => (
  <div>
    {title && <h4>{title}</h4>}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 4,
        marginTop: 8
      }}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} style={{ width: '100%', paddingTop: '100%', background: '#eee' }} />
      ))}
    </div>
  </div>
);
