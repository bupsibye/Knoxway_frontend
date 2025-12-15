import React from 'react';
import { useTelegram } from '../hooks/useTelegram';

export const ProfilePage: React.FC = () => {
  const { tg, user } = useTelegram();

  const avatarUrl = user?.username
    ? `https://t.me/i/userpic/320/${user.username}.jpg`
    : null;

  const handleAddGiftClick = () => {
    const botUrl = 'https://t.me/knoxway_bot?start=add_gift';
    window.open(botUrl, '_blank');
  };

  const debugJson = JSON.stringify(user, null, 2);

  return (
    <div style={{ padding: 20, maxWidth: 400, margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: 24 }}>👤 Профиль</h2>
      
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
                objectFit: 'cover'
              }}
            />
          ) : (
            <div style={{
              width: 96,
              height: 96,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16,
              fontSize: 36,
              color: 'white'
            }}>
              {user.first_name?.[0]?.toUpperCase() || 'U'}
            </div>
          )}
          
          <h3 style={{ margin: 8, fontSize: 20, color: '#333' }}>
            @{user.username || 'без username'}
          </h3>
          
          <p style={{ 
            color: '#666', 
            fontSize: 16, 
            background: '#f8f9fa', 
            padding: '8px 16px',
            borderRadius: 20,
            display: 'inline-block',
            marginBottom: 24
          }}>
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

      {/* Временный debug-блок, чтобы увидеть, что в user */}
      <pre
        style={{
          marginTop: 16,
          padding: 8,
          fontSize: 10,
          background: '#f1f3f5',
          borderRadius: 8,
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        }}
      >
        user: {debugJson}
      </pre>

      {/* Ниже можно оставить/убрать баланс и инвентарь по желанию */}
    </div>
  );
};
