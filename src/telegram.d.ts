export {};

declare global {
  interface Window {
    Telegram?: Telegram;
  }

  interface Telegram {
    WebApp: WebApp;
  }

  interface WebApp {
    initData: string;
    initDataUnsafe: {
      user?: WebAppUser;
    };
    colorScheme: 'light' | 'dark';
    themeParams: Record<string, string>;
    isExpanded: boolean;
    expand: () => void;
    close: () => void;
    MainButton: WebAppMainButton;
    BackButton: WebAppBackButton;
    HapticFeedback: any;
  }

  interface WebAppUser {
    id: number;
    first_name?: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    is_premium?: boolean;
    photo_url?: string;
  }

  interface WebAppMainButton {
    text: string;
    isVisible: boolean;
    isProgressVisible: boolean;
    show: () => void;
    hide: () => void;
    setText: (text: string) => void;
    showProgress: () => void;
    hideProgress: () => void;
    onClick: (callback: () => void) => void;
    offClick: (callback: () => void) => void;
  }

  interface WebAppBackButton {
    isVisible: boolean;
    show: () => void;
    hide: () => void;
    onClick: (callback: () => void) => void;
    offClick: (callback: () => void) => void;
  }
}