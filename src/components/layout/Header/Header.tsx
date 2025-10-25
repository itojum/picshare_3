import { Cluster } from "@/components/ui";
import { I18nMenu } from "@/components/I18nMenu";

export const Header: React.FC = () => {
  return (
    <Cluster justify="end" className="p-4">
      <I18nMenu />
    </Cluster>
  );
};