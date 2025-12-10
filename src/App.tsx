import React, { useState } from 'react';
import { Tabs, TabKey } from './components/Tabs';
import { ExchangePage } from './pages/ExchangePage';
import { ProfilePage } from './pages/ProfilePage';
import { BuyStarsPage } from './pages/BuyStarsPage';
import { GiftsStorePage } from './pages/GiftsStorePage';
import { useTelegram } from './hooks/useTelegram';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('exchange');
  const { user } = useTelegram();

  const renderContent = () => {
    switch (activeTab) {
      case 'exchange':
        return <ExchangePage />;
      case 'profile':
        return <ProfilePage user={user || null} />;
      case 'buy-stars':
        return <BuyStarsPage />;
      case 'gifts-store':
        return <GiftsStorePage />;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        paddingBottom: 56,
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      {renderContent()}
      <Tabs active={activeTab} onChange={setActiveTab} />
    </div>
  );
};

export default App;