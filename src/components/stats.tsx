"use client";

import React, { useEffect, useState } from "react";
interface StatsComponent {
  url: string;
  height: number | string;
}

export const Stats: React.FC<StatsComponent> = ({
  url,
  height,
}) => {
  const [loading, setLoading] = useState(true);
  const [iframeUrl, setIframeUrl] = useState("");

  useEffect(() => {
    const fetchedData = url
    setIframeUrl(fetchedData);
  }, []);

  return (
    <div className="md:my-2 p-2 md:p-4">
      {loading && (
        <h1>Loading</h1>
      )}

      {iframeUrl && (
          <iframe
            src={iframeUrl}
            onLoad={() => setLoading(false)}
            className={`rounded-lg transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"
              } w-full md:w-1/2`}
            height={height}
          />
      )}
    </div>
  );
};
