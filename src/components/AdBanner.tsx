"use client";

import { useEffect } from "react";

interface AdBannerProps {
  className?: string;
  style?: React.CSSProperties;
  format?: "auto" | "fluid" | "rectangle";
  slot: string;
}

export default function AdBanner({
  className,
  style,
  format = "auto",
  slot,
}: AdBannerProps) {
  useEffect(() => {
    try {
      // @ts-expect-error - window.adsbygoogle is injected by the AdSense script
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense 에러:", err);
    }
  }, []);

  return (
    <div className={`w-full overflow-hidden my-4 ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6389820476496669"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
