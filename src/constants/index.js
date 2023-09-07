import {
    mobile,
    backend,
     creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    // meta,
    // starbucks,
    // tesla,
    // shopify,
    carrent,
    jobit,
    tripguide,
    threeJs,
    threejs,
    P5Js,
    Java,
    ReactJs,
  } from "../assets";
  
  export const navLinks = [
    // {
    //   id: "about",
    //   title: "About",
    // },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "JAVA Coder",
      icon: mobile,
    },
    {
      title: "Node Js",
      icon: backend,
    },
    {
      title: "Sketch And Visuals",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Creative Coding",
      company_name: "P5.Js",
      icon: P5Js,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Incoperating the library P5.js for captivating an interactive animations for visual understanding of concepts of various fields"

      ],
      link:"https://fractals-trees.vercel.app/",
    },
    {
      title: "3D Interactive webpages ",
      company_name: "ThreeJs",
      icon: threeJs,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Explorer in Three.js possessing grasp of 3D graphics programming for the web. leveraging this expertise to create engaging and interactive 3D content within web and practical applications.",

      ],
      link:"",
    },
    {
      title: "Programming DSA",
      company_name: "Java",
      icon: Java,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Well-versed in DSA demonstrates an adept ability to solve complex problems efficiently." ,
        "Can analyze challenges, break them down into smaller components, and apply appropriate data structures and algorithms to devise optimized solutions.",
      ],
      link:"",
    },
    {
      title: "Front-End",
      company_name: "ReactJs",
      icon: ReactJs,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Having a grasp over the power of component-based architecture along with developing Single-Page Applications that offer fast and smooth navigation without requiring full page reloads along with state, to create modern and responsive web applications.",
      ],
      link:"https://my-face-mesh.vercel.app/",
    },
    {
      title: "Back-End",
      company_name: "NodeJs",
      icon: ReactJs,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Having a grasp over the power of component-based architecture along with developing Single-Page Applications that offer fast and smooth navigation without requiring full page reloads along with state, to create modern and responsive web applications.",
      ],
      link:"",
    },
  ];
  
  
  const projects = [
    {
      name: "NodeJs Blog Page",
      description:
        "Web-based platform that allows users to search, edit, and manage blogs  from various admins, providing a convenient and efficient solution for storing articles and posts.",
      tags: [
        {
          name: "NodeJs",
          color: "purple-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "ejs",
          color: "pink-text-gradient",
        },
        {
          name: "Express",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://shrexp-blog.cyclic.app",
    },
    {
      name: "ASCII Art",
      description:
        "Created project using P5.js that takes picture input and turns it into an ascii art based on the density string assigned to each value of the rgb color",
      tags: [
        {
          name: "P5-Js",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },

      ],
      image: jobit,
      source_code_link: "https://shreyas-ascii-art.vercel.app/",
    },
    {
      name: "My Edu Site",
      description:
        "A website representing my educational journey along with some interactive animation using threeJs and react-three/fiber",
      tags: [
        {
          name: "threeJs",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "rtf",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://shreyas-ed-site.vercel.app/",
    },

  ];
  
  export { services, technologies, experiences, projects };