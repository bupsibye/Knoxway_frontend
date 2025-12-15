import React from 'react';
import { useTelegram } from '../hooks/useTelegram';

export const ProfilePage: React.FC = () => {
  const { user } = useTelegram();

  const avatarUrl = user?.username
    ? `https://t.me/i/userpic/320/${user.username}.jpg`
    : null;

  return (
    <div style={{ padding: 20, maxWidth: 400, margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: 24 }}>👤 Профиль</h2>

      {user && (
        <div style={{ textAlign: 'center' }}>
          {avatarUrl && (
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
            />
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
      )}

      {!user && (
        <p style={{ textAlign: 'center', color: '#666', marginTop: 40 }}>
          Данные пользователя пока не переданы Telegram.
        </p>
      )}
    </div>
  );
};
