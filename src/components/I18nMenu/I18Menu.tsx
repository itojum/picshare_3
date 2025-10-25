'use client'

import { Button, DropdownMenuButton, FaGlobeIcon } from "@/components/ui";
import { Locale } from "@/types/locale";

type Props = {
  onChange: (locale: Locale) => void;
}

export const I18nMenu: React.FC<Props> = ({ onChange }) => (
  <DropdownMenuButton label={<FaGlobeIcon alt="言語切り替え" />}>
    <Button onClick={() => onChange('ja')}>
      日本語
    </Button>
    <Button onClick={() => onChange('en')}>
      English
    </Button>
  </DropdownMenuButton>
);