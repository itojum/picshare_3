'use client'

import { localeAtom } from "@/store/locale";
import { useSetAtom } from "jotai";
import { Locale } from "@/types/locale";
import { I18nMenu } from "./I18Menu";

export const I18nMenuAdapter: React.FC = () => {
  const setLocale = useSetAtom(localeAtom);

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  return <I18nMenu onChange={handleLanguageChange} />;
};
