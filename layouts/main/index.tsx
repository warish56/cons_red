import { MainArea, ContentArea, DrawerArea } from "./style";

type MainLayoutProps = {
  drawer: React.ReactElement;
  content: React.ReactElement;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  fullWidthContent?: boolean;
};

export const MainLayout = ({
  drawer,
  content,
  containerProps = {},
  fullWidthContent = false,
}: MainLayoutProps) => {
  return (
    <MainArea $fullContent={fullWidthContent} {...containerProps}>
      <DrawerArea className="drawer_area">{drawer}</DrawerArea>
      <ContentArea className="content_area">{content}</ContentArea>
    </MainArea>
  );
};
