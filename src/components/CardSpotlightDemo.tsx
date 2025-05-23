import Link from "next/link";
import Image from "next/image";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { CardSpotlightHoverInterface } from "@/utils/interface";

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
      <div className="w-full h-48 rounded-lg overflow-hidden">
        <Image
          src={image || "/midhun.jpg"}
          alt="projectImage"
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
        />
      </div>

      <p className="text-xl font-semibold text-white mt-4">
        {title || "Title"}
        {underDevelopment && (
          <span className="text-semibold text-green-400 text-xs ml-4">Ongoing</span>
        )}
      </p>

      <h4 className="text-sm text-semibold mt-4">Tools & Technologies</h4>
      <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar mt-2">
        {techStack.map((tech, index) => (
          <i key={index} className={`${tech}`}></i>
        ))}
        {techImageStack && techImageStack.map((item, index) => (
          <Image key={index} src={item.url} alt={item.url} width={1000} height={1000} className={`w-4 h-4 ${item.className}`} />
        ))}
      </div>

      <p className="text-sm text-neutral-300 mt-4 line-clamp-3">
        {description || "Loading..."}
      </p>

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
