import { Suspense } from "react";
import { ViewPage } from "@/components/pages/ViewPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PicShare - 画像を閲覧",
  description: "共有された画像を閲覧できます",
};

export default function ViewPageContainer() {
  return (
    <Suspense fallback={<div>読み込み中...</div>}>
      <ViewPage />
    </Suspense>
  );
}
