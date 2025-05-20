"use client";

import { Loader } from "lucide-react";
import { StatsComponent } from "@/utils/interface";
import React, { useEffect, useState } from "react";

export const Stats: React.FC<StatsComponent> = ({
  url,
  height,
}) => {

  const [loading, setLoading] = useState(true);
  const [iframeUrl, setIframeUrl] = useState("");

  useEffect(() => {
    const fetchedData = url
    if(fetchedData)
      setIframeUrl(fetchedData);
      setLoading(false);
  }, []);

  return (
    <div className="md:my-2 p-2 md:p-4">
      {loading ? (
        <Loader className="animate-spin size-5 text-white" />
      ) : iframeUrl && (
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
