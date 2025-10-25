"use client"

import { useState } from "react";

import { ViewPage } from "./ViewPage";

export const ViewPageAdapter: React.FC = () => {
  const [imageId, setImageId] = useState("")
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleView = async () => {
    if (!imageId.trim()) return

    setLoading(true)
    setError(null)
    setImageUrl(null)

    try {
      const response = await fetch(`/api/images/${encodeURIComponent(imageId.trim())}`)

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("画像が見つかりませんでした")
        }
        throw new Error("画像の取得に失敗しました")
      }

      const data = await response.json()
      setImageUrl(data.url)
    } catch (err) {
      setError(err instanceof Error ? err.message : "画像の取得に失敗しました")
    } finally {
      setLoading(false)
    }
  }

  return <ViewPage
    imageId={imageId}
    setImageId={setImageId}
    handleView={handleView}
    loading={loading}
    imageUrl={imageUrl}
    error={error}
    setError={setError}
    setImageUrl={setImageUrl}
  />;
};