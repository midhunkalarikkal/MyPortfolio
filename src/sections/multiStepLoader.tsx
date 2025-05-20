"use client";
import React, { useEffect, useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";

const loadingStates = [
  { text: "Hello, connections!" },
  { text: "What's up?" },
  { text: "Software Engineer on board 👨‍💻" },
  { text: "Let's connect 🤝" },
  { text: "Almost there!" },
];

interface Props {
  onComplete?: () => void;
}

export function MultiStepLoader({ onComplete }: Props) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const totalDuration = 5000 * loadingStates.length;
    const timeout = setTimeout(() => {
      setLoading(false);
      onComplete?.();
    }, totalDuration);

    return () => clearTimeout(timeout);
  }, [onComplete]);

  if (!loading) return null;

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <Loader loadingStates={loadingStates} loading={loading} duration={1000} />
    </div>
  );
}
