import React from 'react';
import { useTelegram } from '../hooks/useTelegram';

export const ProfilePage: React.FC = () => {
  const { user } = useTelegram();

  if (!user) {
    return (
      <div style={{ padding: 16 }}>
        <h2>Профиль</h2>
        <p>Данные пользователя не получены.</p>
        <p>Попробуй закрыть мини‑приложение и открыть его заново из @knoxway_bot.</p>
      </div>
    );
  }

  const username = user.username ? `@${user.username}` : '—';
  const firstName = user.first_name || '';
  const lastName = user.last_name || '';
  const fullName = `${firstName} ${lastName}`.trim() || username;

  // photo_url может быть недоступен в типах, поэтому берём через any и даём заглушку
  const avatarUrl =
    // @ts-expect-error photo_url может не быть в типах
    (user as any).photo_url ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName || 'User')}`;

  return (
    <div style={{ padding: 16 }}>
      <h2>Профиль</h2>

      <div style={{ display: 'flex', alignItems: 'center', marginTop: 16, marginBottom: 16 }}>
        <img
          src={avatarUrl}
          alt="Аватар"
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            objectFit: 'cover',
            marginRight: 16,
          }}
        />
        <div>
          <div style={{ fontWeight: 600, fontSize: 18 }}>{fullName}</div>
          <div style={{ color: '#9ca3af', marginTop: 4 }}>{username}</div>
          <div style={{ color: '#6b7280', marginTop: 4 }}>ID: {user.id}</div>
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <h3>Баланс</h3>
        <p>Звёзды: 0 (заглушка)</p>
      </div>

      <div style={{ marginTop: 16 }}>
        <h3>Инвентарь</h3>
        <button
          style={{
            width: '100%',
            padding: 8,
            marginBottom: 8,
            borderRadius: 8,
            border: '1px solid #ccc',
          }}
        >
          Внести подарок
        </button>
        <button
          style={{
            width: '100%',
            padding: 8,
            borderRadius: 8,
            border: '1px solid #ccc',
          }}
        >
          Вывести подарок
        </button>
      </div>
    </div>
  );
};
