import { HomePage } from "@/components/pages";
import Head from "next/head";

const IndexPage = () => (
  <>
    <Head>
      <title>CthuPallet</title>
      <meta
        name="description"
        content="皆の好きな曲を持ち寄って、誰が持ってきた曲か当てよう！"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HomePage />
  </>
);

export default IndexPage;
