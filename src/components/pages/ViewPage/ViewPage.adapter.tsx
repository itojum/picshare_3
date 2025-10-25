"use client"

import { useState } from "react";

import { ViewPage } from "./ViewPage";
import { useSearchParams } from "next/navigation";
import { useFetchImage } from "@/hooks/useFetchImage";

export const ViewPageAdapter: React.FC = () => {
  const searchParams = useSearchParams()
  const [ imageId, setImageId ] = useState(searchParams.get("imageId") || "")
  const { imageUrl, loading, error, fetchImage, reset } = useFetchImage()

  return <ViewPage
    imageId={imageId}
    setImageId={setImageId}
    fetchImage={() => fetchImage(imageId)}
    loading={loading}
    imageUrl={imageUrl}
    error={error}
    reset={reset}
  />;
};