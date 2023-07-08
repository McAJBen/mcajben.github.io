"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loading() {
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setSpin(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-xl text-white">
      Loading...
      {spin && (
        <Image
          src="/ben.jpg"
          className="rounded-full animate-spin w-20 h-20"
          width={40}
          height={40}
          alt="ben"
        />
      )}
    </div>
  );
}
