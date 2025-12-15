import React from 'react';
import { useTelegram } from '../hooks/useTelegram';

export const ProfilePage: React.FC = () => {
  const { tg, user } = useTelegram();

  const avatarUrl = user?.username
    ? `https://t.me/i/userpic/320/${user.username}.jpg`
    : null;

  const handleAddGiftClick = () => {
    // важно: start=add_gift, чтобы боту пришёл /start add_gift
    const botUrl = 'https://t.me/knoxway_bot?start=add_gift';
    window.open(botUrl, '_blank');
  };

  return (
    <div style={{ padding: 20, maxWidth: 400, margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: 24 }}>
        👤 Профиль
      </h2>

      {user ? (
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt="Аватар"
              style={{
                width: 96,
                height: 96,
                borderRadius: '50%',
                border: '3px solid #007bff',
                marginBottom: 16,
                objectFit: 'cover',
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          ) : (
            <div
              style={{
                width: 96,
                height: 96,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16,
                fontSize: 36,
                color: 'white',
              }}
            >
              {user.first_name?.[0]?.toUpperCase() || 'U'}
            </div>
          )}

          <h3 style={{ margin: 8, fontSize: 20, color: '#333' }}>
            @{user.username || 'без username'}
          </h3>

          <p
            style={{
              color: '#666',
              fontSize: 16,
              background: '#f8f9fa',
              padding: '8px 16px',
              borderRadius: 20,
              display: 'inline-block',
              marginBottom: 24,
            }}
          >
            ID: <strong>{user.id}</strong>
          </p>
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: 40, color: '#666' }}>
          <p>Данные профиля недоступны</p>
          <p style={{ fontSize: 14, marginTop: 8 }}>
            Откройте приложение через кнопку бота @knoxway_bot
          </p>
        </div>
      )}

      <div
        style={{
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          padding: '20px 16px',
          borderRadius: 16,
          color: 'white',
          textAlign: 'center',
          marginBottom: 24,
        }}
      >
        <h4 style={{ margin: 0, fontSize: 18 }}>⭐ Баланс</h4>
        <p style={{ margin: 4, fontSize: 28, fontWeight: 'bold' }}>125 звёзд</p>
      </div>

      <div
        style={{
          background: '#f8f9fa',
          padding: '20px 16px',
          borderRadius: 16,
          marginBottom: 24,
        }}
      >
        <h4 style={{ margin: 0, fontSize: 18, color: '#333' }}>🎁 Инвентарь</h4>
        <p style={{ margin: 8, color: '#666', fontSize: 14 }}>
          Подарков пока нет
        </p>
      </div>

      <div>
        <button
          style={{
            width: '100%',
            padding: '16px 20px',
            background: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: 12,
            fontSize: 16,
            fontWeight: '600',
            marginBottom: 12,
            cursor: 'pointer',
          }}
          onClick={handleAddGiftClick}
        >
          ➕ Внести подарок
        </button>
        <button
          style={{
            width: '100%',
            padding: '16px 20px',
            background: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: 12,
            fontSize: 16,
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          📤 Вывести подарок
        </button>
      </div>
    </div>
  );
};
