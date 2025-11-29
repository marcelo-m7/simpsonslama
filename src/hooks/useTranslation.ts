import { useContext } from "react";
import { I18nContext } from "@/i18n/I18nProvider";
import { Locale } from "@/i18n/translations";

export const useTranslation = () => {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useTranslation must be used within an I18nProvider");
  }

  const { locale, setLocale, t } = context;

  const switchLocale = (target?: Locale) => {
    if (target) {
      setLocale(target);
      return;
    }

    setLocale(locale === "pt" ? "en" : "pt");
  };

  return { locale, setLocale: switchLocale, t: t[locale] };
};
