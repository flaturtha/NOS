import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "https://talesofmurder.com";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirecting to talesofmurder.com...</p>
    </div>
  );
}
