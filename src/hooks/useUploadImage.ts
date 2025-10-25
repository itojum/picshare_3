import { path } from "@/config/path"
import { useState } from "react"
import { compressImage } from "@/utils/compressImage"

export const useUploadImage = () => {
  const [imageId, setImageId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const uploadImage = async (file: File | null) => {
    if (!file) return

    setLoading(true)
    setError(null)
    setImageId(null)

    try {
      // 画像を圧縮
      const compressedBlob = await compressImage(file)

      // BlobをFileオブジェクトに変換
      const compressedFile = new File([compressedBlob], file.name, {
        type: 'image/jpeg',
        lastModified: Date.now(),
      })

      const formData = new FormData()
      formData.append("file", compressedFile)
      const response = await fetch(path.api.upload, {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error(await response.text())
      }

      const data = await response.json()
      setImageId(data.id)
    } catch (error) {
      setError(error instanceof Error ? error.message : "Upload failed")
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setImageId(null)
    setError(null)
    setLoading(false)
  }

  return { imageId, loading, error, uploadImage, reset }
}
