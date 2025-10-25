import { Suspense } from "react";
import { ViewPage } from "@/components/pages/ViewPage";
import { Metadata } from "next";
import { Center, Loader } from "@/components/ui";

export const metadata: Metadata = {
  title: "PicShare - 画像を閲覧",
  description: "共有された画像を閲覧できます",
};

export default function ViewPageContainer() {
  return (
    <Suspense fallback={<Center><Loader /></Center>}>
      <ViewPage />
    </Suspense>
  );
}
