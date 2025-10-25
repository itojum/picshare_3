import type { Metadata } from "next";
import { Provider as JotaiProvider } from "jotai";

import { Header } from "@/components/layout/Header/Header";
import { IntlProviderWrapper } from "@/components/layout/IntlProviderWrapper";

import "./globals.css";
import 'smarthr-ui/smarthr-ui.css'

export const metadata: Metadata = {
  title: "PicShare",
  description: "画像を簡単にアップロードして共有できます",
};

type Props = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <body>
        <JotaiProvider>
          <IntlProviderWrapper>
            <Header />
            {children}
          </IntlProviderWrapper>
        </JotaiProvider>
      </body >
    </html >
  );
}
