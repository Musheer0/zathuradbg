"use client";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);

    if (isAndroid) {
      // Twitter app deep link using intent
      window.location.href =
        "intent://user?screen_name=rcx86#Intent;package=com.twitter.android;scheme=twitter;end";
    } else if (isIOS) {
      // iOS deep link scheme (usually just opens app if installed)
      window.location.href = "twitter://user?screen_name=rcx86";

      // Fallback to browser after delay
      setTimeout(() => {
        window.location.href = "https://x.com/rcx86";
      }, 2000);
    } else {
      // Fallback for everything else (desktop, unknown OS)
      window.location.href = "https://x.com/rcx86";
    }
  }, []);

  return <p className="text-center mt-10">Are you human please wait while we verify your browser history...</p>;
}
