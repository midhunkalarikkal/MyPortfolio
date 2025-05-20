import { HeadingInterface } from "@/utils/interface"

export const Heading: React.FC<HeadingInterface> = ({
  title,
  smallTitle
}) => {
  return (
    <div className="my-4 md:my-10">
      <h2 className="text-2xl md:text-4xl text-white">{title}</h2>
      <h6 className="text-green-400 text-semibold">{smallTitle}</h6>
    </div>
  )
}