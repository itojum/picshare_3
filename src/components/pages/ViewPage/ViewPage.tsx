"use client"

import Link from "next/link"

import { Button, Input, Base, Text, FaAngleLeftIcon, FaEyeIcon, FaMagnifyingGlassIcon, PageHeading, Cluster, Stack, FormControl } from "@/components/ui"
import Image from "next/image";

type Props = {
  imageId: string;
  setImageId: (imageId: string) => void;
  handleView: () => void;
  loading: boolean;
  error: string | null;
  setError: (error: string | null) => void;
  imageUrl: string | null;
  setImageUrl: (imageUrl: string | null) => void;
};

export const ViewPage: React.FC<Props> = ({
  imageId, setImageId, handleView, loading, imageUrl, error, setError, setImageUrl,
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
        <Stack>
          <div>
            <Cluster>
              <FaEyeIcon className="w-8 h-8 text-primary" />
              <PageHeading>
                画像を閲覧
              </PageHeading>
            </Cluster>
            <Text color="TEXT_GREY">画像IDを入力して共有された画像を表示します</Text>
          </div>
          <div className="space-y-6">
            <form onSubmit={handleView}>
              <FormControl label="画像ID">
                <Input
                  type="text"
                  value={imageId}
                  onChange={(e) => setImageId(e.target.value)}
                  disabled={loading}
                  className="flex-1 h-8 mr-2"
                />
                <Button onClick={handleView} disabled={!imageId.trim() || loading} size="s" className="shrink-0">
                  <FaMagnifyingGlassIcon className="w-4 h-4" />
                </Button>
              </FormControl>
            </form>

            {error && (
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            {loading && (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            )}

            {imageUrl && !loading && (
              <div className="space-y-4">
                <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden border-2">
                  <Image
                    src={imageUrl || "/placeholder.svg"}
                    alt="Shared image"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => window.open(imageUrl, "_blank")} variant="text" className="flex-1">
                    新しいタブで開く
                  </Button>
                  <Button
                    onClick={() => {
                      setImageUrl(null)
                      setImageId("")
                      setError(null)
                    }}
                    variant="secondary"
                    className="flex-1"
                  >
                    別の画像を表示
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Stack>
      </Base>
    </div>
  </div >
)
