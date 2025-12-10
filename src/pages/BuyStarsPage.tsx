import React from 'react';

export const BuyStarsPage: React.FC = () => {
  const handleOpen = () => {
    // сюда позже можно подставить официальный URL покупки звёзд
    window.open('https://t.me/premium', '_blank');
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>Купить звёзды</h2>
      <p>Нажмите кнопку ниже, чтобы перейти на официальный экран покупки звёзд Telegram.</p>
      <button
        onClick={handleOpen}
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
        Открыть покупку звёзд
      </button>
    </div>
  );
};
