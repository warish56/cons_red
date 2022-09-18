import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MainLayout } from "@layouts/main";
import { DrawerComponent } from "@components/drawer";

function MyApp({ Component, pageProps }: AppProps) {
  // @ts-ignore:
  const showFullWidth = Component?.attributes?.fullwidthContent || false;
  return (
    <MainLayout
      drawer={<DrawerComponent />}
      content={<Component {...pageProps} />}
      fullWidthContent={showFullWidth}
    />
  );
}

export default MyApp;
