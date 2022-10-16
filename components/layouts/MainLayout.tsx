import Head from "next/head";

type MainLayoutProps = {
  children: React.ReactNode;
  headContent?: React.ReactNode;
};

const MainLayout = ({ children, headContent }: MainLayoutProps) => {
  return (
    <>
      <Head>{headContent}</Head>
      {children}
    </>
  );
};

export default MainLayout;
