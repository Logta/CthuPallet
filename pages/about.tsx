import Link from "next/link";
import Head from "next/head";
import { BaseLayout } from "@/components";

const AboutPage = () => (
  <>
    <Head>
      <title>CthuPallet</title>
      <meta
        name="description"
        content="皆の好きな曲を持ち寄って、誰が持ってきた曲か当てよう！"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <BaseLayout>
      <>
        <h1>About</h1>
        <p>This is the about page</p>
        <p>
          <Link href="/">
            <a>Go home</a>
          </Link>
        </p>
      </>
    </BaseLayout>
  </>
);

export default AboutPage;
