import Link from "next/link";
import Image from "next/image";
import { CardSpotlight } from "@/components/ui/card-spotlight";

interface CardSpotlightHoverInterface {
  image: string;
  title: string;
  techStack: string[];
  description: string;
  techImageStack?: { url: string, className?: string }[];
  liveLink?: string;
  githubLink?: string
  frontendGithubLink?: string;
  backendGithubLink?: string;
  underDevelopment?: boolean;
}

export const CardSpotlightHover: React.FC<CardSpotlightHoverInterface> = ({
  image,
  title,
  techStack,
  description,
  techImageStack,
  liveLink,
  githubLink,
  frontendGithubLink,
  backendGithubLink,
  underDevelopment,
}) => {
  return (
    <CardSpotlight className="min-h-[450px] w-full max-w-sm flex flex-col justify-between p-4 rounded-2xl bg-neutral-900 shadow-md transition-all hover:shadow-xl">
      {/* Image */}
      <div className="w-full h-48 rounded-lg overflow-hidden">
        <Image
          src={image || "/midhun.jpg"}
          alt="projectImage"
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
        />
      </div>

      {/* Title */}
      <p className="text-xl font-semibold text-white mt-4">
        {title || "Title"}
        {underDevelopment && (
          <span className="text-semibold text-green-400 text-xs ml-4">Ongoing</span>
        )}
      </p>

      {/* Tech Stack */}
      <h4 className="text-sm text-semibold mt-4">Tools & Technologies</h4>
      <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
        {techStack.map((tech, index) => (
          <i key={index} className={`${tech}`}></i>
        ))}
        {techImageStack && techImageStack.map((item, index) => (
          <Image key={index} src={item.url} alt={item.url} width={1000} height={1000} className={`w-4 h-4 ${item.className}`} />
        ))}
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-300 mt-4 line-clamp-3">
        {description ||
          "Ensuring your account is properly secured helps protect your personal information and data."}
      </p>

      {/* Links */}
      <div className="flex flex-wrap items-center gap-2 mt-6">
        {liveLink && (
          <Link
            href={liveLink}
            target="_blank"
            className="text-green-400 text-sm font-medium hover:underline"
          >
            Live Demo
          </Link>
        )}
        {githubLink && (
          <Link
            href={githubLink}
            target="_blank"
            className="text-green-200 text-sm font-medium hover:underline"
          >
            GitHub Repo
          </Link>
        )}
        {frontendGithubLink && (
          <Link
            href={frontendGithubLink}
            target="_blank"
            className="text-green-200 text-sm font-medium hover:underline"
          >
            Frontend Github Repo
          </Link>
        )}
        {backendGithubLink && (
          <Link
            href={backendGithubLink}
            target="_blank"
            className="text-green-200 text-sm font-medium hover:underline"
          >
            Backend Github Repo
          </Link>
        )}
      </div>
    </CardSpotlight>
  );
};
