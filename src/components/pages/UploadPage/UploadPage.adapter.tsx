"use client"

import { ChangeEvent, DragEvent, useState } from "react";
import { UploadPage } from "./UploadPage";

export const UploadPageAdapter: React.FC = () => {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [imageId, setImageId] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement> | DragEvent<HTMLElement>, files: FileList | null) => {
    const selectedFile = files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setPreview(URL.createObjectURL(selectedFile))
      setImageId(null)
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)
    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) throw new Error("Upload failed")

      const data = await response.json()
      setImageId(data.id)
    } catch (error) {
      console.error("Upload error:", error)
      alert("アップロードに失敗しました")
    } finally {
      setUploading(false)
    }
  }

  const copyToClipboard = () => {
    if (imageId) {
      navigator.clipboard.writeText(imageId)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const reset = () => {
    setFile(null)
    setPreview(null)
    setImageId(null)
    setCopied(false)
  }

  return <UploadPage
    file={file}
    preview={preview}
    imageId={imageId}
    copied={copied}
    uploading={uploading}
    handleFileChange={handleFileChange}
    handleUpload={handleUpload}
    copyToClipboard={copyToClipboard}
    reset={reset}
    setCopied={setCopied}
    setUploading={setUploading}
  />;
};