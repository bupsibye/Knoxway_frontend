import React from 'react';

export type TabKey = 'exchange' | 'profile' | 'buy-stars' | 'gifts-store';

interface Tab {
  key: TabKey;
  label: string;
}

const TABS: Tab[] = [
  { key: 'exchange', label: 'Обмен' },
  { key: 'profile', label: 'Профиль' },
  { key: 'buy-stars', label: 'Купить звёзды' },
  { key: 'gifts-store', label: 'Магазин подарков' },
];

interface Props {
  active: TabKey;
  onChange: (key: TabKey) => void;
}

export const Tabs: React.FC<Props> = ({ active, onChange }) => {
  return (
    <div style={styles.container}>
      {TABS.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          style={{
            ...styles.button,
            ...(active === tab.key ? styles.buttonActive : {}),
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px',
    borderTop: '1px solid rgba(0,0,0,0.1)',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(0,0,0,0.02)',
    backdropFilter: 'blur(10px)',
  },
  button: {
    flex: 1,
    margin: '0 4px',
    padding: '8px 4px',
    fontSize: 12,
    borderRadius: 8,
    border: 'none',
    background: 'transparent',
    color: '#666',
  },
  buttonActive: {
    background: '#0088cc',
    color: '#fff',
  },
};