import React from 'react';

interface Props {
  user: WebAppUser | null;
}

export const ProfilePage: React.FC<Props> = ({ user }) => {
  return (
    <div style={{ padding: 16 }}>
      <h2>Профиль</h2>
      {user ? (
        <>
          <p>ID: {user.id}</p>
          <p>Username: @{user.username || '—'}</p>
          <p>
            Имя: {user.first_name} {user.last_name || ''}
          </p>
        </>
      ) : (
        <p>Данные пользователя не получены.</p>
      )}

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