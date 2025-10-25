import Link from "next/link"
import { 
  Button, 
  Base, 
  Cluster, 
  Stack, 
  FaCloudArrowUpIcon, 
  FaEyeIcon, 
  Heading, 
  Text, 
  PageHeading,
  Center
} from "@/components/ui"

export const HomePage: React.FC = () => (
  <div className="min-h-screen bg-background flex items-center justify-center p-4">
    <Stack className="w-full max-w-4xl">
      <Center>
        <PageHeading size="XXL">PicShare v3</PageHeading>
        <Text size="L">画像を簡単にアップロードして共有できます</Text>
      </Center>

      <div className="grid md:grid-cols-2 gap-6">
        <Base className="border-2 p-4">
          <Stack>
            <div>
              <Cluster>
                <FaCloudArrowUpIcon className="w-6 h-6 text-primary" />
                <Heading className="text-2xl">画像をアップロード</Heading>
              </Cluster>
              <Text>画像をアップロードして共有用のIDを取得</Text>
            </div>
            <Stack>
              <Link href="/upload">
                <Button className="w-full" size="default">
                  アップロードページへ
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Base>

        <Base className="border-2 p-4">
          <Stack>
            <div>
              <Cluster>
                <FaEyeIcon className="w-6 h-6 text-primary" />
                <Heading className="text-2xl">画像を閲覧</Heading>
              </Cluster>
              <Text>IDを入力して共有された画像を表示</Text>
            </div>
            <Stack>
              <Link href="/view">
                <Button className="w-full" variant="secondary" size="default">
                  閲覧ページへ
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Base>
      </div>
    </Stack>
  </div>
);

