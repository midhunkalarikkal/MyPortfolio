import { Power3 } from "gsap";
import { CardSpotlightHoverInterface, EducationTimelineItem, SkillItem } from "./interface";

// Home page designation strings
export const designationArray: string[] = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Software Engineer",
]

// Home page navlinks
export const navLinks: string[] = [
    "Home", "About", "Resume", "Skills", "Portfolio", "Contact"
]





// GSPA animation objects

export const gsapSetHomePageMainObject = {
    opacity: 1,
    y: 0,
}

export const gsapFromHomePageMainObject = {
    duration: 2,
    opacity: 0,
    y: -50,
    ease: Power3.easeOut,
}

export const gsapToNameMaskGroupFirstObject = {
    rotate: 0,
    duration: 2,
    ease: "Power4.easeInOut",
    transformOrigin: "50% 50%",
}

export const gsapToNameMaskGroupSecondObject = {
    scale: 10,
    duration: 2,
    delay: -1.8,
    ease: "Expo.easeInOut",
    transformOrigin: "50% 50%",
    opacity: 0,
}

export const gsapToMainObject = {
    scale: 1,
    rotate: 0,
    duration: 2,
    delay: -1,
    ease: "Expo.easeInOut",
}

export const gsapHeadingSetObject = {
      opacity: 0,
      y: 90,
    }

export const getGsapHeadingAnimation = (targetRef: Element | null) => ({
  opacity: 1,
  y: 0,
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: targetRef,
    start: "top 0%",
    toggleActions: "play reverse play reverse", // repeatable animation
  },
});





// **** Skiils Page Data **** \\
export const languages: SkillItem[] = [
  { label: "JavaScript", isIcon: true, value: "devicon-javascript-plain colored" },
  { label: "TypeScript", isIcon: true, value: "devicon-typescript-plain colored" },
  { label: "MongoDB", isIcon: true, value: "devicon-mongodb-plain colored" },
  { label: "C", isIcon: true, value: "devicon-c-plain colored" },
  { label: "PostgreSQL", isIcon: true, value: "devicon-postgresql-plain colored" },
  { label: "HTML5", isIcon: true, value: "devicon-html5-plain colored" },
  { label: "(S)CSS", isIcon: true, value: "devicon-css3-plain colored" },
];

export const libraries: SkillItem[] = [
  { label: "Node.js", isIcon: true, value: "devicon-nodejs-plain-wordmark colored" },
  { label: "Express", isIcon: true, value: "devicon-express-original" },
  { label: "React JS", isIcon: true, value: "devicon-react-original colored" },
  { label: "Next JS", isIcon: true, value: "devicon-nextjs-plain" },
  { label: "Tailwind", isIcon: true, value: "devicon-tailwindcss-plain colored" },
  { label: "Bootstrap", isIcon: true, value: "devicon-bootstrap-plain colored" },
  { label: "MUI", isIcon: true, value: "devicon-materialui-plain colored" },
  { label: "Socket.io", isIcon: true, value: "/socketiologo.png" },
  { label: "GSAP", isIcon: true, value: "/gsaplogo.png" },
];

export const tools: SkillItem[] = [
  { label: "Git", isIcon: true, value: "devicon-git-plain colored" },
  { label: "Postman", isIcon: true, value: "devicon-postman-plain colored" },
  { label: "Jest", isIcon: true, value: "devicon-jest-plain colored" },
  { label: "Render", isIcon: false, value: "/renderlogo.jpeg" },
  { label: "Vercel", isIcon: true, value: "devicon-vercel-original" },
  { label: "AWS", isIcon: true, value: "devicon-amazonwebservices-plain colored" },
  { label: "Firebase", isIcon: true, value: "devicon-firebase-plain colored" },
  { label: "Redis", isIcon: true, value: "devicon-redis-plain-wordmark" },
  { label: "EJS", isIcon: false, value: "/ejslogo.png", invert: true },
  { label: "Cloudinary", isIcon: false, value: "/cloudinarylogo.png" },
  { label: "Razorpay", isIcon: false, value: "/razorpaylogo.jpeg" },
  { label: "Stripe", isIcon: false, value: "/stripelogo.png" },
  { label: "Paypal", isIcon: false, value: "/paypallogo.png" },
];


export const designTools: SkillItem[] = [
  { label: "Figma", isIcon: true, value: "devicon-figma-plain colored" },
  { label: "CodePlanner", isIcon: false, value: "/codeplannerlogo.png" },
  { label: "Photoshop", isIcon: true, value: "devicon-photoshop-plain" },
];


export const stateManagement: SkillItem[] = [
  { label: "Context API", isIcon: false, value: "/contextapilogo.png" },
  { label: "Redux", isIcon: true, value: "devicon-redux-plain colored" },
  { label: "Zustand", isIcon: false, value: "/zustandlogo.png" },
];


export const concepts: SkillItem[] = [
  { label: "MVC Architecture", isIcon: false, value: "/mvcarchitecturelogo.png" },
  { label: "CLEAN Architecture", isIcon: false, value: "/cleanarchitecturelogo.png" },
  { label: "Waterfall Model", isIcon: false, value: "/waterfallmodellogo.png", invert: true },
  { label: "SOLID Principles", isIcon: false, value: "/solidprincipleslogo.png" },
];





// **** Education Page Data **** \\
export const educationTimelineData: EducationTimelineItem[] = [
  {
    title: "2023 Oct - Present",
    heading: "BROTOTYPE",
    description: `I joined the Brototype bootcamp to sharpen and shape my programming skills for the future. During this journey, I gained more than just technical knowledge—I developed discipline, consistency, strong work ethics, and a powerful mindset rooted in the principle that perception equals freedom. The program follows a research-driven, self-learning approach where I receive weekly feedback and reviews from professional software engineers through mock interviews. Each week presents a new challenge, including reading, building projects, giving seminars, and more. These experiences have been instrumental in shaping me into the person and programmer I am today.`,
    highlight: "Brototype",
  },
  {
    title: "2023 Jun",
    heading: "B.TECH",
    description: `I graduated with a B.Tech in Computer Science and Engineering, entering as a lateral entry student. My three-year journey was filled with valuable learning experiences, both academically and personally. I had the opportunity to lead two team projects, both of which were web applications, allowing me to strengthen my leadership, collaboration, and technical skills. I successfully completed my degree with a CGPA of 6.56.`,
    highlight: "B.Tech",
  },
  {
    title: "2020 Jun",
    heading: "DIPLOMA",
    description: `My journey into the world of programming began during my Diploma studies. I started as a complete beginner, but my passion and enthusiasm for computers fueled my growth. Over time, I developed a strong foundation and steadily improved my skills. It was a meaningful and transformative journey, and I successfully completed my Diploma with a CGPA of 7.2.`,
    highlight: "Diploma",
  },
];





// **** Portfolio Data **** \\
export const portfolioData: CardSpotlightHoverInterface[] = [
  {
    image: "https://res.cloudinary.com/dj8ma5m2t/image/upload/v1747669022/Slotflow1_oknpne.jpg",
    title: "Slotflow",
    techStack: [
      "devicon-react-original colored",
      "devicon-typescript-plain colored",
      "devicon-nodejs-plain-wordmark colored",
      "devicon-tailwindcss-plain colored",
      "devicon-express-original",
      "devicon-mongodb-plain colored",
      "devicon-amazonwebservices-plain colored",
      "devicon-redis-plain-wordmark",
      "devicon-redux-plain colored",
    ],
    techImageStack: [
      { url: "/cleanarchitecturelogo.png" },
      { url: "/solidprincipleslogo.png" },
      { url: "/gsaplogo.png" },
    ],
    description: "I’ve built a scalable SaaS-based Appointment Booking Application using the MERN Stack, TypeScript, TanStack Query, and shadcn/ui. Now in the testing and deployment stage, the platform supports multiple user roles—admin, provider, and customer—with secure, role-based dashboards. It features over 12 well-structured schemas, AWS S3 for file storage, Redis for caching, and Aceternity for smooth UI animations. Real-time data fetching and efficient state management ensure a seamless and high-performance user experience.",
    backendGithubLink: "https://github.com/midhunkalarikkal/slotflow-BE",
    frontendGithubLink: "https://github.com/midhunkalarikkal/Slotflow-FE",
    underDevelopment: true,
  },
  {
    image: "https://res.cloudinary.com/dj8ma5m2t/image/upload/v1747670342/pixster_pmq0cw.png",
    title: "Pixster",
    techStack: [
      "devicon-react-original colored",
      "devicon-tailwindcss-plain colored",
      "devicon-nodejs-plain-wordmark colored",
      "devicon-express-original",
      "devicon-mongodb-plain colored",
      "devicon-amazonwebservices-plain colored",
      "devicon-redis-plain-wordmark",
    ],
     techImageStack: [
      { url: "/zustandlogo.png" },
      { url: "/renderlogo.jpeg" },
      { url: "/gsaplogo.png" },
      { url: "/socketiologo.png" },
    ],
    description: "I developed Pixster, a dynamic social media web application built from scratch to explore real-time interaction and content sharing. Designed with a modern tech stack, Pixster allows users to create profiles, post images, like and comment, follow others, and manage their personal feed. The project focuses on smooth UI/UX, optimized data handling, and real-time updates, giving me deep insights into scalable architecture, authentication systems, and interactive social features.",
    liveLink: "https://pixster.onrender.com/",
    githubLink: "https://github.com/midhunkalarikkal/pixster",
  },
  {
    image: "https://res.cloudinary.com/dj8ma5m2t/image/upload/v1747669234/Lapshop1_mlhdfo.png",
    title: "Lapshop",
    techStack: [
      "devicon-html5-plain colored",
      "devicon-css3-plain colored",
      "devicon-javascript-plain colored",
      "devicon-Bootstrap-plain colored",
      "devicon-nodejs-plain-wordmark colored",
      "devicon-express-original",
      "devicon-mongodb-plain colored",
      "devicon-amazonwebservices-plain colored",
    ],
    techImageStack: [
      { url: "/mvcarchitecturelogo.png" },
    ],
    description: "I developed a full-fledged E-Commerce Web Application for laptops from scratch, gaining hands-on experience across the full stack. The platform includes key features such as filtering, sorting, cart with save for later, product reviews, order tracking, flexible payment options, and a fully responsive design. It also offers an admin dashboard with product, order, user, banner, and coupon management, along with detailed sales reports for business insights.",
    liveLink: "https://lapshop.site/",
    githubLink: "https://github.com/midhunkalarikkal/lapshop",
  },
  {
    image: "https://res.cloudinary.com/dj8ma5m2t/image/upload/v1747678551/Screenshot_2025-05-19_194607_njo9c0.png",
    title: "Portfolio Webpage",
    techStack: [
      "devicon-nextjs-plain",
      "devicon-typescript-plain colored",
      "devicon-firebase-plain colored",
    ],
    techImageStack: [
      { url: "/gsaplogo.png" },
    ],
    description: "A sleek personal portfolio built with Next.js, TypeScript, and Tailwind CSS, featuring smooth animations using GSAP. Includes sections like Skills, Education, Portfolio, Stats, and Contact. Fully responsive and hosted on Firebase.",
    githubLink: "https://github.com/midhunkalarikkal/MyPortfolio",
  },
  {
    image: "https://res.cloudinary.com/dj8ma5m2t/image/upload/v1747669283/FigmaSlotflow_pppnkj.jpg",
    title: "Slotflow figma design",
    techStack: [
      "devicon-figma-plain colored"
    ],
    description: "I designed a complete Figma layout for an Appointment Booking Web Application, creating all pages from scratch with a strong focus on user experience and development-friendly structure. This is a new and exciting experience for me, and I’m also planning to implement an interactive prototype based on the wireframes.",
  },
  {
    image: "https://res.cloudinary.com/dj8ma5m2t/image/upload/v1747669284/NetflixRcgpt_ecgruu.jpg",
    title: "Netflix Clone",
    techStack: [
      "devicon-react-original colored",
      "devicon-tailwindcss-plain colored",
      "devicon-jest-plain colored",
      "devicon-firebase-plain colored",
      "devicon-redux-plain colored",
    ],
    description: "I developed a fully responsive Netflix Clone using React, Tailwind CSS, Redux, and Firebase for authentication and hosting. It integrates the TMDB API for movie data and uses custom hooks for efficient category-based requests. To enhance UX, I implemented shimmer loading effects and seamless navigation. Firebase handles secure authentication with email verification and password reset. I also integrated a Gemini 1.5 Flash-powered recommendation system with rate limiting for personalized suggestions. This project deepened my React skills and is continuously evolving with new features for better performance and engagement.",
    liveLink: "https://netflix-rcgpt.web.app",
    githubLink: "https://github.com/midhunkalarikkal/nexflix-rcgpt",
  },
  {
    image: "https://res.cloudinary.com/dj8ma5m2t/image/upload/v1747669285/Youtuberc_emxbwn.jpg",
    title: "Youtube Clone",
    techStack: [
      "devicon-react-original colored",
      "devicon-tailwindcss-plain colored",
      "devicon-firebase-plain colored",
      "devicon-redux-plain colored",
    ],
    description: "I created a fully responsive YouTube Clone using React and YouTube APIs, making it one of my most refined and favorite projects. It features YouTube-style tiles, dynamic video pages with full details and comments, debounced search using the YouTube Search API, and real-time search suggestions. I also implemented a mocked live chat system, a single-level nested comment structure, light/dark theme toggling, custom hooks, and Redux for state management. The project is currently in the optimization and hosting phase to ensure smooth performance and scalability.",
    liveLink: "https://clone-c9b9a.web.app/",
    githubLink: "https://github.com/midhunkalarikkal/yt-clone",
  },
  {
    image: "https://res.cloudinary.com/dj8ma5m2t/image/upload/v1747669282/Olx1_fpuj59.jpg",
    title: "OLX Crud Clone",
    techStack: [
      "devicon-react-original colored",
      "devicon-tailwindcss-plain colored",
      "devicon-nodejs-plain-wordmark colored",
      "devicon-express-original",
      "devicon-mongodb-plain colored",
      "devicon-firebase-plain colored",
      "devicon-redux-plain colored",
    ],
    techImageStack: [
      { url: "/renderlogo.jpeg" },
      { url: "/contextapilogo.png" },
    ],
    description: "I developed an OLX Clone using the MERN stack to reinforce full-stack development through core CRUD operations. The app features React.js with Context API for state management, Tailwind CSS for responsive styling, and Express.js with MongoDB and Node.js on the backend. Firebase handles authentication and hosting, while Cloudinary manages image uploads. Key features include user authentication, product listing CRUD, responsive UI, real-time notifications via React Hot Toast, and scalable architecture—delivering a smooth and engaging user experience.",
    liveLink: "https://clone-c9b9a.web.app/",
    frontendGithubLink: "https://github.com/midhunkalarikkal/olx-clone",
    backendGithubLink: "https://github.com/midhunkalarikkal/olx_c_backend"
  },
  {
    image: "https://res.cloudinary.com/dj8ma5m2t/image/upload/v1747669282/Craveroute1_ioir0y.jpg",
    title: "Craveroute",
    techStack: [
      "devicon-react-original colored",
      "devicon-tailwindcss-plain colored",
      "devicon-nodejs-plain-wordmark colored",
      "devicon-express-original",
      "devicon-mongodb-plain colored",
      "devicon-firebase-plain colored",
      "devicon-redux-plain colored",
    ],
    techImageStack: [
      { url: "/renderlogo.jpeg" },
    ],
    description: "CraveRoute is a sleek food delivery web application built from scratch using React, Redux, and Tailwind CSS. Designed as part of my learning journey, it helped me explore component-based architecture, responsive design, and state management. Though basic, with data stored in localStorage, it includes core features like restaurant listings, menu views, cart management, and a mock payment gateway. Inspired by real-world apps, CraveRoute highlights my growing proficiency in React and modern UI development.",
    liveLink: "https://craveroute-food-order.web.app/",
    frontendGithubLink: "https://github.com/midhunkalarikkal/React-f-d",
    backendGithubLink: "https://github.com/midhunkalarikkal/CraveRoute-BE"
  },
  {
    image: "https://res.cloudinary.com/dj8ma5m2t/image/upload/v1747669285/Porsche1_if8ivz.jpg",
    title: "Porsche Landing Page",
    techStack: [
      "devicon-html5-plain colored",
      "devicon-css3-plain colored",
      "devicon-javascript-plain colored",
      "devicon-Bootstrap-plain colored",
    ],
    description: "This is a fully animated, responsive static webpage built to showcase the elegance and innovation of Porsche. Crafted using JavaScript, Bootstrap, and CSS, it features smooth animations and dynamic interactions for an engaging user experience. Inspired by a one-direction animation, the project evolved into a full-fledged visual experience, demonstrating my creativity and front-end animation skills.",
    liveLink: "https://midhunkalarikkal.github.io/porsche-landing/",
    githubLink: "https://github.com/midhunkalarikkal/porsche-landing",
  },
  {
    image: "https://res.cloudinary.com/dj8ma5m2t/image/upload/v1747669282/Valorant_aptoo8.jpg",
    title: "Valorant Fan Page",
    techStack: [
      "devicon-html5-plain colored",
      "devicon-css3-plain colored",
      "devicon-javascript-plain colored",
      "devicon-bootstrap-plain colored",
      "devicon-nodejs-plain-wordmark colored",
      "devicon-express-original",
      "devicon-mongodb-plain colored",
    ],
    techImageStack: [
      { url: "/renderlogo.jpeg" },
    ],
    description: "As a lifelong gamer with a deep passion for Valorant, I created a dedicated tribute webpage using the Valorant npm package. Built as a Node.js application, it features login/logout functionality, user and admin panels, and admin-controlled user management. This project marked the start of my journey into Node.js development, blending my enthusiasm for gaming with practical coding experience. Developed during my transition from gaming to full-time coding at Brocamp, it reflects both my technical growth and personal inspiration.",
    liveLink: "https://valorant-falj.onrender.com",
    githubLink: "https://midhunkalarikkal.github.io/valorant/",
  },
  {
    image: "https://res.cloudinary.com/dj8ma5m2t/image/upload/v1747669285/FigmaLapshop_noyqek.jpg",
    title: "Lapshop Figma Design",
    techStack: [
      "devicon-figma-plain colored",
    ],
    description: "I designed the LapShop e-commerce website using Figma, marking my first experience with the tool. This project helped me understand UI/UX fundamentals and allowed me to plan all pages efficiently while also guiding the database structure for seamless development.",
  },
  {
    image: "https://res.cloudinary.com/dj8ma5m2t/image/upload/v1747673516/NodeCrud1_rw9pdw.png",
    title: "Node Crud",
    techStack: [
      "devicon-html5-plain colored",
      "devicon-css3-plain colored",
      "devicon-javascript-plain colored",
      "devicon-bootstrap-plain colored",
      "devicon-nodejs-plain-wordmark colored",
      "devicon-express-original",
      "devicon-mongodb-plain colored",
    ],
    techImageStack: [
      { url: "/renderlogo.jpeg" },
    ],
    description: "🚀 A beginner-friendly project built to practice Node.js, EJS, sessions, cookies, and middleware. It features basic login/logout functionality along with full CRUD operations, laying the foundation for backend development skills.",
    liveLink: "https://crud-app-jrb4.onrender.com",
    githubLink: "https://github.com/midhunkalarikkal/sampleLoginLogout"
  },
  {
    image: "https://res.cloudinary.com/dj8ma5m2t/image/upload/v1747669283/Flipkart_qx5c2j.jpg",
    title: "Flipcart Homepage",
    techStack: [
      "devicon-html5-plain colored",
      "devicon-css3-plain colored",
      "devicon-javascript-plain colored",
      "devicon-Bootstrap-plain colored",
    ],
    description: "I recreated Flipkart’s home page using HTML, CSS, Bootstrap, and JavaScript to strengthen my front-end skills. The project features a responsive layout with a sleek navbar, scrolling sections, product displays, and banners for an enhanced shopping experience. Bootstrap’s utility classes helped streamline the design, ensuring both functionality and visual appeal.",
    liveLink: "https://midhunkalarikkal.github.io/flipkart_homepage/",
    githubLink: "https://github.com/midhunkalarikkal/flipkart_homepage"
  },
  {
    image: "https://res.cloudinary.com/dj8ma5m2t/image/upload/v1747669282/Amazon_m3ayuy.jpg",
    title: "Amazon Homepage",
    techStack: [
      "devicon-html5-plain colored",
      "devicon-css3-plain colored",
      "devicon-javascript-plain colored",
    ],
    description: "Building an Amazon-inspired webpage using HTML, CSS, and JavaScript was a valuable learning experience. The design includes an organized navbar, smooth scrolling sections, product showcases, and promotional banners—optimized for medium and larger screens to deliver a clean and engaging user experience.",
    liveLink: "https://github.com/midhunkalarikkal/amazonhomepage",
    githubLink: "https://midhunkalarikkal.github.io/amazonhomepage/"
  },
  {
    image: "https://res.cloudinary.com/dj8ma5m2t/image/upload/v1747673838/Instagram_dkg9od.jpg",
    title: "Instagram Homepage",
    techStack: [
      "devicon-html5-plain colored",
      "devicon-css3-plain colored",
    ],
    description: "Creating an Instagram-inspired webpage using HTML, CSS, and JavaScript was a great learning experience. The layout includes key frontend components: a left-side navigation panel, a central feed for scrolling posts, a right-side section for suggested accounts, and a story section—closely mimicking Instagram’s UI for a realistic and responsive design.",
    liveLink: "https://midhunkalarikkal.github.io/instahomepage/",
    githubLink: "https://github.com/midhunkalarikkal/instahomepage"
  },
  {
    image: "https://res.cloudinary.com/dj8ma5m2t/image/upload/v1747674323/Netflix_tqkpxe.jpg",
    title: "Netflix Homepage",
    techStack: [
      "devicon-html5-plain colored",
      "devicon-css3-plain colored",
    ],
    description: "I created a Netflix-inspired homepage using HTML and CSS, utilizing Flexbox for a clean and responsive layout. The page features multiple scrolling sections with diverse content, a prominent movie banner highlighting a featured title, and a well-structured navigation bar for seamless browsing—delivering a visually engaging and user-friendly experience.",
    liveLink: "https://midhunkalarikkal.github.io/Netflixhomepage/Index.html",
    githubLink: "https://github.com/midhunkalarikkal/Netflixhomepage"
  },
];





// **** Stats page github and leetcode urls **** \\
export const gihubStatsUrl: string = `https://github-readme-stats.vercel.app/api?username=midhunkalarikkal&show_icons=true&title_color=18d26e&text_color=ffffff&icon_color=18d26e&bg_color=000000&hide_border=true`;
export const leetcodeStatsLink: string = `https://leetcard.jacoblin.cool/midhunkpaniker?theme=dark&font=Karla&ext=heatmap`;
export const githubTrophiesStatsLink: string = "https://github-profile-trophy.vercel.app/?username=midhunkalarikkal&theme=darkhub&no-frame=true";
export const githubContributionTilesLink: string = "https://ghchart.rshah.org/18d26e/midhunkalarikkal";