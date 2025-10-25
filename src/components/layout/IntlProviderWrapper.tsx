'use client'

import { IntlProvider as ReactIntlProvider } from "react-intl";
import { IntlProvider as SmarthrIntlProvider } from "smarthr-ui";
import { useAtomValue } from "jotai";
import { localeAtom } from "@/store/locale";
import jaMessages from "@/locale/ja.json";
import enMessages from "@/locale/en.json";

type Props = {
  children: React.ReactNode;
}

const messages = {
  ja: jaMessages,
  en: enMessages,
};

export const IntlProviderWrapper: React.FC<Props> = ({ children }) => {
  const locale = useAtomValue(localeAtom);

  return (
    <ReactIntlProvider locale={locale} messages={messages[locale]}>
      <SmarthrIntlProvider locale={locale}>
        {children}
      </SmarthrIntlProvider>
    </ReactIntlProvider>
  );
};

