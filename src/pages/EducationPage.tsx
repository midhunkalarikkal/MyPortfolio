import { Heading } from "@/components/Heading";
import { Timeline } from "@/components/ui/timeline";

export const EducationPage = () => {
  const data = [
    {
      title: "2023 Oct - Present",
      content: (
        <div>
          <h1 className="text-white text-xl md:text-3xl font-bold">BROTOTYPE</h1>
          <p className="mb-8 text-sm md:text-lg font-normal text-neutral-200 text-justify">
            I joined the <span className="text-green-400">Brototype</span> bootcamp to sharpen and shape my programming skills for the future. During this journey, I gained more than just technical knowledge—I developed discipline, consistency, strong work ethics, and a powerful mindset rooted in the principle that perception equals freedom. The program follows a research-driven, self-learning approach where I receive weekly feedback and reviews from professional software engineers through mock interviews. Each week presents a new challenge, including reading, building projects, giving seminars, and more. These experiences have been instrumental in shaping me into the person and programmer I am today.
          </p>
        </div>
      ),
    },
    {
      title: "2023 jun",
      content: (
        <div>
          <h1 className="text-white text-xl md:text-3xl font-bold">B.TECH</h1>
          <p className="mb-8 text-sm md:text-lg font-normal text-neutral-200 text-justify">
            I graduated with a <span className="text-green-400">B.Tech</span>  in Computer Science and Engineering, entering as a lateral entry student. My three-year journey was filled with valuable learning experiences, both academically and personally. I had the opportunity to lead two team projects, both of which were web applications, allowing me to strengthen my leadership, collaboration, and technical skills. I successfully completed my degree with a CGPA of 6.56.
          </p>
        </div>
      ),
    },
    {
      title: "2020 Jun",
      content: (
        <div>
          <h1 className="text-white text-xl md:text-3xl font-bold">DIPLOMA</h1>
          <p className="mb-8 text-sm md:text-lg font-normal text-neutral-200 text-justify">
            My journey into the world of programming began during my <span className="text-green-400">Diploma</span> studies. I started as a complete beginner, but my passion and enthusiasm for computers fueled my growth. Over time, I developed a strong foundation and steadily improved my skills. It was a meaningful and transformative journey, and I successfully completed my Diploma with a CGPA of 7.2.
          </p>
        </div>
      ),
    },

  ];
  return (
    <div className="relative w-full md:max-w-10/12">
      <Heading title="Education" smallTitle="Academic Journey" />
      <Timeline data={data} />
    </div>
  );
}