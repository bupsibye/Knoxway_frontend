import React from 'react';

export const ProfilePage: React.FC = () => {
  return (
    <div style={{ padding: 16 }}>
      <h2>Профиль</h2>
      <p>Данные пользователя не получены через Telegram Mini App API.</p>
      <p>В текущей конфигурации Telegram не передаёт информацию о пользователе.</p>

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
