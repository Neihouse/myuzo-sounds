import { useState, createContext, useContext, ReactNode, FC } from 'react';

interface I18nContextType {
  locale: string;
  setLocale: (locale: string) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState('en');

  return (
    <I18nContext.Provider value={{ locale, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within a I18nProvider');
  }
  return context;
};
