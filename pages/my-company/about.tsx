import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Info() {
  return (
    <>
      <Head>
        <title>会社概要</title>
      </Head>
      <main>
        <h2>会社概要</h2>
        <Link href={"http://localhost:3000/my-company/about"}>
          <p>会社について</p>
        </Link>
      </main>
    </>
  );
}
