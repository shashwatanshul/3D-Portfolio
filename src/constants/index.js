import {
  foodbay,
  // meta,
  // shopify,
  // starbucks,
  // tesla,
  fox,
} from "../assets/images";
import {
  threeD,
  gmail,
  car,
  three,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  // {
  //   imageUrl: nextjs,
  //   name: "Next.js",
  //   type: "Frontend",
  // },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React.js",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: three,
    name: "Three.js",
    type: "3-D Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  // {
  //   imageUrl: typescript,
  //   name: "TypeScript",
  //   type: "Frontend",
  // },
];

export const experiences = [
  {
    title: "FoxMail",
    company_name: "Email Sending Website with a 3D Fox Animation",
    icon: fox,
    iconBg: "#fbc3bc",
    date: "February 2024",
    points: [
      "Foxmail is a captivating web application developed using Email.js, Three.js, React Three Fiber, and React Three Drei, offering users an engaging experience with a combination of email functionality and 3D animations.",
      "The application presents a form with input fields for Name, Email, and Message, accompanied by an animated Fox character.",
      "When the user is idle, the Fox wiggles its tail, providing subtle movement and interest.",
      "Upon user interaction, such as typing in the input fields, the Fox begins walking animation, adding a dynamic element to the experience.",
      "Additionally, when the user clicks the 'Send Message' button, the Fox transitions into a running animation, visually indicating the message sending process.",
      "This integration of technology not only provides a functional contact form but also delivers an interactive and memorable user experience.",
    ],
    link: "https://foxmail.fun",
  },
  {
    title: "3D-Portfolio",
    company_name: "A Three Dimensional Portfolio",
    icon: threeD,
    iconBg: "#accbe1",
    date: "January 2024",
    points: [
      "The 3D portfolio website is an innovative showcase built using a combination of technologies including Three.js, React Three Fiber, React Three Drei, React Spring, and Email.js.",
      "Three.js provides the foundation for creating 3D elements and scenes, while React Three Fiber facilitates the integration of Three.js into the React ecosystem, offering a declarative way to define 3D components using JSX.",
      "React Three Drei adds additional utilities and components to simplify the development process further, while React Spring enables smooth animations and transitions.",
      "Additionally, Email.js is utilized for integrating a contact form into the portfolio, allowing visitors to send emails directly from the website.",
      "This portfolio showcases the fusion of cutting-edge technologies to create an immersive and interactive experience for presenting projects and engaging with visitors.",
    ],
    link: "https://shashwatsingh.co.in",
  },
  {
    title: "Foodbay",
    company_name: "Order Management Website for Restaurant",
    icon: foodbay,
    iconBg: "#90ee90",
    date: "December 2023",
    points: [
      "Utilized MongoDB for the database, Express.js for the backend API, React.js for the frontend UI, and Node.js for server-side logic.",
      "Implemented user authentication functionality to secure user accounts and data. Users can sign up, log in, and manage their accounts securely.",
      "Created a dynamic menu that displays food items dynamically fetched from the database. Users can view a variety of food options categorized by relevant criteria.",
      "Developed a responsive shopping cart feature that allows users to add items to their cart and review their selections. The shopping cart dynamically updates as users add or remove items, providing a seamless and intuitive experience.",
      "Implemented an admin panel for managing the website's content, users, and orders. Admins have the ability to add, edit, or remove food items, manage user accounts, and view order details.",
      "Integrated the PhonePe payment gateway for secure and streamlined transactions. Users can make payments securely using PhonePe, enhancing trust and convenience.",
      "Overall, the MERN stack food ordering website showcases expertise in full-stack development, user experience design, payment gateway integration, and data security, providing users with a seamless and secure platform for ordering food online.",
    ],
    link: "https://foodbay-d5zp.onrender.com",
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#fbc3bc",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#b7e4c7",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#a2d2ff",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

export const socialLinks = [
  {
    name: "Mobile",
    iconUrl: contact,
    link: "https://foxmail.fun/",
    text: "8650579576",
  },
  {
    name: "Email",
    iconUrl: gmail,
    link: "https://foxmail.fun/",
    text: "shashwatanshul@gmail.com",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/shashwatanshul/",
    text: "https://github.com/shashwatanshul/",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/shashwat-singh-2b13a9160/",
    text: "https://www.linkedin.com/in/shashwat-singh-2b13a9160/",
  },
];

export const projects = [
  {
    iconUrl: fox,
    theme: "btn-back-red",
    name: "FoxMail",
    description:
      "Foxmail is a captivating web application developed using Email.js, Three.js, React Three Fiber, and React Three Drei, offering users an engaging experience with a combination of email functionality and 3D animations. The application presents a form with input fields for Name, Email, and Message, accompanied by an animated Fox character. When the user is idle, the Fox wiggles its tail, providing subtle movement and interest. Upon user interaction, such as typing in the input fields, the Fox begins walking animation, adding a dynamic element to the experience. Additionally, when the user clicks the 'Send Message' button, the Fox transitions into a running animation, visually indicating the message sending process. This integration of technology not only provides a functional contact form but also delivers an interactive and memorable user experience.",
    link: "https://foxmail.fun",
  },
  {
    iconUrl: threeD,
    theme: "btn-back-black",
    name: "3D-Portfolio",
    description:
      "The 3D portfolio website is an innovative showcase built using a combination of technologies including Three.js, React Three Fiber, React Three Drei, React Spring, and Email.js. Three.js provides the foundation for creating 3D elements and scenes, while React Three Fiber facilitates the integration of Three.js into the React ecosystem, offering a declarative way to define 3D components using JSX. React Three Drei adds additional utilities and components to simplify the development process further, while React Spring enables smooth animations and transitions. Additionally, Email.js is utilized for integrating a contact form into the portfolio, allowing visitors to send emails directly from the website. This portfolio showcases the fusion of cutting-edge technologies to create an immersive and interactive experience for presenting projects and engaging with visitors.",
    link: "https://shashwatsingh.co.in",
  },
  {
    iconUrl: foodbay,
    theme: "btn-back-yellow",
    name: "Foodbay",
    description:
      "Foodbay is an order management website for restaurant developed using MongoDB, Express.js, React.js, and Node.js, offering a range of features including user-authentication, a dynamic menu, responsive shopping cart and an admin panel for content management. The integration of the PhonePe payment gateway ensures secure and streamlined transactions. Demonstrating proficiency in full-stack development, payment gateway integration, and data security, the website seamlessly combines frontend and backend technologies to provide users with a seamless and secure online food ordering experience.",
    link: "https://foodbay-d5zp.onrender.com",
  },
  // {
  //   iconUrl: threads,
  //   theme: "btn-back-green",
  //   name: "Full Stack Threads Clone",
  //   description:
  //     'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
  //   link: "https://github.com/adrianhajdin/threads",
  // },
  // {
  //   iconUrl: car,
  //   theme: "btn-back-blue",
  //   name: "Car Finding App",
  //   description:
  //     "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
  //   link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  // },
  // {
  //   iconUrl: snapgram,
  //   theme: "btn-back-pink",
  //   name: "Full Stack Instagram Clone",
  //   description:
  //     "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
  //   link: "https://github.com/adrianhajdin/social_media_app",
  // },
  // {
  //   iconUrl: estate,
  //   theme: "btn-back-black",
  //   name: "Real-Estate Application",
  //   description:
  //     "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
  //   link: "https://github.com/adrianhajdin/projects_realestate",
  // },
  // {
  //   iconUrl: summiz,
  //   theme: "btn-back-yellow",
  //   name: "AI Summarizer Application",
  //   description:
  //     "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
  //   link: "https://github.com/adrianhajdin/project_ai_summarizer",
  // },
];
