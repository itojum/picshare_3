import { UploadPage } from "@/components/pages/UploadPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PicShare - 画像をアップロード",
  description: "画像をアップロードして共有用のIDを取得",
};

export default function UploadPageContainer() {
  return <UploadPage />;
}
