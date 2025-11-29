import { createContext, useMemo, useState } from "react";
import { defaultLocale, Locale, translations } from "./translations";

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof translations;
}

export const I18nContext = createContext<I18nContextValue | undefined>(undefined);

interface Props {
  children: React.ReactNode;
}

export const I18nProvider = ({ children }: Props) => {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: translations,
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};
