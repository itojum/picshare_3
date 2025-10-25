import { path } from "@/config/path"
import { useState } from "react"

export const useFetchImage = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchImage = async (imageId: string) => {
    if (!imageId.trim()) return

    setLoading(true)
    setError(null)
    setImageUrl(null)

    try {
      const imageUrl = path.supabase.image(imageId)

      // 画像が存在するか確認
      const response = await fetch(imageUrl, { method: "HEAD" })

      if (!response.ok) {
        throw new Error("画像が見つかりませんでした")
      }

      setImageUrl(imageUrl)
    } catch (error) {
      setError(error instanceof Error ? error.message : "画像の取得に失敗しました")
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setImageUrl(null)
    setError(null)
    setLoading(false)
  }

  return { imageUrl, loading, error, fetchImage, reset }
};