import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <Image
      src="/images/logo.png"
      alt="Nike.Inc"
      width={200}
      height={40}
      className="w-[100px] h-full"
      priority
    />
  );
}
