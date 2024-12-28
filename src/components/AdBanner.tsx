"use client";

import { useEffect, useId, useRef } from "react";

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
  const id = useId();
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    try {
      // @ts-expect-error - window.adsbygoogle is injected by the AdSense script
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      initialized.current = true;
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
        id={id}
      />
    </div>
  );
}
