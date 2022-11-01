import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const data = trpc.applications.getAll.useQuery();

  return (
    <MainLayout
      headContent={
        <>
          <title>Job Application Tracker</title>
          <meta
            name="description"
            content="Web App that helps you track the progress of your job applications."
          />
          <link rel="icon" href="/favicon.ico" />
        </>
      }
    >
      Hello, World!
    </MainLayout>
  );
};

export default Home;
