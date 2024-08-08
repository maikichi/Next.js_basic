import Image from "next/image";
import React from "react";

export default function CompanyImage() {
  return (
    <>
      <Image
        src="/images/company.jpg"
        alt={"ユニコーン会社"}
        width={100}
        height={100}
      />
    </>
  );
}
