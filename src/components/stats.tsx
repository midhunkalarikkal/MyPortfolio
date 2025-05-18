"use client";

import React, { useEffect, useState } from "react";
interface StatsComponent {
    url: string;
    width: string | number;
    height: string | number;
    title: string;
}

export const Stats: React.FC<StatsComponent> = ({
    url,
    width,
    height,
    title
}) => {
  const [loading, setLoading] = useState(true);
  const [iframeUrl, setIframeUrl] = useState("");

  useEffect(() => {
    const fetchedData = url
    setIframeUrl(fetchedData);
  }, []); 

  return (
    <div className="my-2">
      {loading && (
        <h1>Loading</h1>
      )}

      {iframeUrl && (
        <>
        <h1 className="text-xl text-white mb-4 font-semibold">{title}</h1>
        <iframe
          src={iframeUrl}
          onLoad={() => setLoading(false)}
          className={`rounded-lg transition-opacity duration-300 w-auto${
            loading ? "opacity-0" : "opacity-100"
          }`}
          width={width}
          height={height}
          />
          </>
      )}
    </div>
  );
};
