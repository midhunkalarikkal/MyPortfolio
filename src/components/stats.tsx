"use client";

import React, { useEffect, useState } from "react";
interface StatsComponent {
  url: string;
  title: string;
}

export const Stats: React.FC<StatsComponent> = ({
  url,
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
            className={`rounded-lg transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"
              } w-full md:w-[1000px]`}
            height={200}
          />
        </>
      )}
    </div>
  );
};
