import { Suspense } from "react";
import { ViewPage } from "@/components/pages/ViewPage";

export default function ViewPageContainer() {
  return (
    <Suspense fallback={<div>読み込み中...</div>}>
      <ViewPage />
    </Suspense>
  );
}
