import type { Metadata } from "next";
import "./globals.css";
import 'smarthr-ui/smarthr-ui.css'
import { IntlProvider } from "smarthr-ui";

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
        <IntlProvider locale="ja">
          {children}
        </IntlProvider>
      </body>
    </html>
  );
}
