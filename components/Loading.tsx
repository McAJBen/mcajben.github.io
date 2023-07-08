"use client";

import { useEffect, useState } from "react";
import styles from "./Loading.module.css";
import Image from "next/image";

export default function Loading() {
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setSpin(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.loading_content}>
      {spin && (
        <Image
          src="/ben.jpg"
          className={styles.loading_spinning_image}
          width={40}
          height={40}
          alt="ben"
        />
      )}
    </div>
  );
}
