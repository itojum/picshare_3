"use client"

import { ChangeEvent, DragEvent, useState } from "react";
import { UploadPage } from "./UploadPage";
import { useUploadImage } from "@/hooks/useUploadImage";

export const UploadPageAdapter: React.FC = () => {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const { imageId, loading, error, uploadImage, reset } = useUploadImage()

  const handleFileChange = (e: ChangeEvent<HTMLInputElement> | DragEvent<HTMLElement>, files: FileList | null) => {
    const selectedFile = files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setPreview(URL.createObjectURL(selectedFile))
    }
  }

  const copyToClipboard = () => {
    if (imageId) {
      navigator.clipboard.writeText(imageId)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return <UploadPage
    file={file}
    preview={preview}
    imageId={imageId}
    copied={copied}
    loading={loading}
    handleFileChange={handleFileChange}
    handleUpload={() => uploadImage(file)}
    copyToClipboard={copyToClipboard}
    reset={reset}
    setCopied={setCopied}
    error={error}
  />;
};