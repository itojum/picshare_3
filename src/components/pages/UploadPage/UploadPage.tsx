"use client"

import Link from "next/link"
import { ChangeEvent, DragEvent } from "react";

import {
  Base,
  Button,
  Cluster,
  DropZone,
  FaAngleLeftIcon,
  FaCheckIcon,
  FaCloudArrowUpIcon,
  FaCopyIcon,
  NotificationBar,
  PageHeading,
  Stack,
  Text,
} from "@/components/ui"
import { PreviewImage } from "@/components/PreviewImage";

type Props = {
  file: File | null;
  preview: string | null;
  imageId: string | null;
  copied: boolean;
  setCopied: (copied: boolean) => void;
  loading: boolean;
  handleFileChange: (e: ChangeEvent<HTMLInputElement> | DragEvent<HTMLElement>, files: FileList | null) => void;
  handleUpload: () => void;
  copyToClipboard: () => void;
  reset: () => void;
  error: string | null;
}

export const UploadPage: React.FC<Props> = ({
  file,
  preview,
  imageId,
  copied,
  loading,
  handleFileChange,
  handleUpload,
  copyToClipboard,
  reset,
  error
}) => (
  <div className="min-h-screen bg-background p-4 py-12">
    <div className="max-w-2xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <FaAngleLeftIcon className="w-4 h-4 mr-2" />
        ホームに戻る
      </Link>

      <Base className="p-8">
        <div>
          <Cluster>
            <FaCloudArrowUpIcon className="w-8 h-8 text-primary" />
            <PageHeading>
              画像をアップロード
            </PageHeading>
          </Cluster>
          <Text color="TEXT_GREY">画像をアップロードして共有用のIDを取得</Text>
        </div>
        <Stack>
          {!imageId ? (
            <>
              <div className="space-y-4">
                <DropZone accept="image/*" onSelectFiles={handleFileChange} disabled={loading} multiple={false} className="w-full h-32" />

                {preview && (
                  <PreviewImage src={preview} />
                )}
              </div>

              <Button onClick={handleUpload} disabled={!file || loading} >
                {loading ? "アップロード中..." : "アップロード"}
              </Button>

              {error && (
                <NotificationBar type="error" message={error} />
              )}
            </>
          ) : (
            <div className="space-y-6">
              <div className="p-6 bg-primary/5 rounded-lg border-2 border-primary/20">
                <p className="text-sm text-muted-foreground mb-2">画像ID</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 text-lg font-mono bg-background px-4 py-3 rounded border text-foreground">
                    {imageId}
                  </code>
                  <Button onClick={copyToClipboard} variant="text" size="s" className="shrink-0 bg-transparent">
                    {copied ? <FaCheckIcon className="w-4 h-4" /> : <FaCopyIcon className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              {preview && (
                <PreviewImage src={preview} />
              )}

              <div className="flex gap-3">
                <Button onClick={reset} variant="text" size="s" className="flex-1 bg-transparent">
                  別の画像をアップロード
                </Button>
                <Link href="/view" className="flex-1">
                  <Button variant="secondary" className="w-full">
                    画像を閲覧
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </Stack>
      </Base>
    </div>
  </div>
)
