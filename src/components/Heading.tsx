interface HeadingInterface {
    title: string;
}

export const Heading: React.FC<HeadingInterface> = ({
    title
}) => {
    return (
        <div className="w-full pt-10">
        <div className="w-[77%] mx-auto px-4 md:px-8 lg:px-10 mt-6">
          <h2 className="text-lg md:text-4xl mb-4 text-white">
            {title}
          </h2>
        </div>
      </div>
    )
}