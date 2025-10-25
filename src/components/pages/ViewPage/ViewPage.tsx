"use client"

import Link from "next/link"

import { Button, Input, Base, Text, FaAngleLeftIcon, FaEyeIcon, FaMagnifyingGlassIcon, PageHeading, Cluster, Stack, FormControl, NotificationBar, Center, Loader } from "@/components/ui"
import Image from "next/image";

type Props = {
  imageId: string;
  setImageId: (imageId: string) => void;
  fetchImage: (imageId: string) => void;
  loading: boolean;
  error: string | null;
  imageUrl: string | null;
  reset: () => void;
};

export const ViewPage: React.FC<Props> = ({
  imageId, setImageId, loading, imageUrl, error, fetchImage, reset,
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
            <form onSubmit={() => fetchImage(imageId)}>
              <FormControl label="画像ID">
                <Input
                  type="text"
                  value={imageId}
                  onChange={(e) => setImageId(e.target.value)}
                  disabled={loading}
                  className="flex-1 h-8 mr-2"
                />
                <Button onClick={() => fetchImage(imageId)} disabled={!imageId.trim() || loading} size="s" className="shrink-0">
                  <FaMagnifyingGlassIcon className="w-4 h-4" />
                </Button>
              </FormControl>
            </form>

            {error && (
              <NotificationBar type="error" message={error} />
            )}

            {loading && (
              <Center>
                <Loader />
              </Center>
            )}

            {imageUrl && !loading && (
              <div className="space-y-4">
                <div className="relative w-full h-96">
                  <Image
                    src={imageUrl}
                    alt="Shared image"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => window.open(imageUrl, "_blank")} variant="text" className="flex-1">
                    新しいタブで開く
                  </Button>
                  <Button
                    onClick={reset}
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
