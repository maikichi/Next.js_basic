import CompanyImage from "@/components/CompanyImage";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <p>
        <Link href={"my-company/about"}>会社概要</Link>
      </p>
      <p>
        <Link href={"my-company/products"}>製品紹介</Link>
      </p>
      <p>
        <Link href={"my-company/contact"}>お問い合わせ</Link>
      </p>
      <div>
        <CompanyImage />
      </div>
    </>
  );
}
