import { useEffect, useState } from "react";
import "./Loading.css";

export default function Loading() {
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setSpin(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="loading-content">
      {spin && (
        <img src="/ben.jpg" className="loading-spinning-image" alt="ben" />
      )}
    </div>
  );
}
