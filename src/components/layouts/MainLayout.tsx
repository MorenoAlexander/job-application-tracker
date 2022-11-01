import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import NavDrawer from "../navigation/NavDrawer";

type MainLayoutProps = {
  children: React.ReactNode;
  headContent?: React.ReactNode;
};

const MainLayout = ({ children, headContent }: MainLayoutProps) => {
  const user = useSession();

  if (user.status === "unauthenticated") {
    signIn();
  }

  return (
    <>
      <Head>{headContent}</Head>
      <NavDrawer open />
      {children}
    </>
  );
};

export default MainLayout;
