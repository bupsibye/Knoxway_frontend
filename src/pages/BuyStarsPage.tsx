import React from 'react';

export const BuyStarsPage: React.FC = () => {
  const handleOpenBuyStars = () => {
    const url = 'https://spend.tg/?r=UQBeGWwQx--zQoeefoEevKIma_qmLKK-SeEd3VV-1YV72KgF';
    // открываем во внешнем браузере / вкладке
    window.open(url, '_blank');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Купить звёзды</h2>

      <p style={{ textAlign: 'center', marginBottom: 16 }}>
        Покупка звёзд происходит через официальный сервис Telegram.
      </p>

      <button
        onClick={handleOpenBuyStars}
        style={{
          width: '100%',
          padding: '16px 20px',
          background: '#ffb703',
          color: '#000',
          border: 'none',
          borderRadius: 12,
          fontSize: 16,
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        💳 Открыть покупку звёзд
      </button>
    </div>
  );
};
