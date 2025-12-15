import React from 'react';
import { useTelegram } from '../hooks/useTelegram';

export const ProfilePage: React.FC = () => {
  const { tg, user } = useTelegram();

  // ссылка на аватар Telegram (если есть username)
  const avatarUrl = user?.username
    ? `https://t.me/i/userpic/320/${user.username}.jpg`
    : null;

  const handleAddGiftClick = () => {
    // важно: передаем start=add_gift, чтобы бот запустил нужный сценарий
    const botUrl = 'https://t.me/knoxway_bot?start=add_gift';
    if (tg) {
      tg.openTelegramLink(botUrl);
    } else {
      window.open(botUrl, '_blank');
    }
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>Профиль</h2>

      {user ? (
        <div style={{ marginTop: 12, display: 'flex', alignItems: 'center' }}>
          {avatarUrl && (
            <img
              src={avatarUrl}
              alt="avatar"
              style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                marginRight: 12,
                objectFit: 'cover',
              }}
            />
          )}
          <div>
            <div style={{ fontWeight: 600 }}>
              {user.first_name} {user.last_name || ''}
            </div>
            {user.username && (
              <div style={{ fontSize: 13, opacity: 0.8 }}>@{user.username}</div>
            )}
            <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>
              ID: {user.id}
            </div>
          </div>
        </div>
      ) : (
        <p style={{ marginTop: 8 }}>
          Данные профиля недоступны. Откройте Knox Market внутри Telegram, а не в
          браузере.
        </p>
      )}

      <div style={{ marginTop: 16 }}>
        <h3>Баланс</h3>
        <p>Звёзды: 0 (пока заглушка)</p>
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
          onClick={handleAddGiftClick}
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
