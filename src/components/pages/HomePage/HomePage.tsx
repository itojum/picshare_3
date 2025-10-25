'use client'

import Link from "next/link"
import { FormattedMessage } from "react-intl";

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
        <Text size="L"><FormattedMessage id="PicShareDescription"/></Text>
      </Center>

      <div className="grid md:grid-cols-2 gap-6">
        <Base className="border-2 p-4">
          <Stack>
            <div>
              <Cluster>
                <FaCloudArrowUpIcon className="w-6 h-6 text-primary" />
                <Heading className="text-2xl"><FormattedMessage id="UploadImage"/></Heading>
              </Cluster>
              <Text><FormattedMessage id="UploadImageDescription"/></Text>
            </div>
            <Stack>
              <Link href="/upload">
                <Button className="w-full" size="default">
                  <FormattedMessage id="UploadImageButton"/>
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
                <Heading className="text-2xl"><FormattedMessage id="ViewImage"/></Heading>
              </Cluster>
              <Text><FormattedMessage id="ViewImageDescription"/></Text>
            </div>
            <Stack>
              <Link href="/view">
                <Button className="w-full" variant="secondary" size="default">
                  <FormattedMessage id="ViewImageButton"/>
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Base>
      </div>
    </Stack>
  </div>
);

