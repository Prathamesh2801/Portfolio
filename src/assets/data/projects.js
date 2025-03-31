import TimerGameImg from "../img/timergame.png";

import Cinemaphile1 from "../project banner/images/p1_home.png";
import Cinemaphile2 from "../project banner/images/p1_browse.png";
import Cinemaphile3 from "../project banner/images/p1_reviews.png";
import Cinemaphile4 from "../project banner/images/p1_bookmarks.png";
import Cinemaphile5 from "../project banner/images/p1_login.png";
import Cinemaphile6 from "../project banner/images/p1_register.png";

import myNotebookImg from "../img/mynotebook.png";
import InvestmentImg from "../img/Investment.png";
import cpImg1 from "../img/cpImg1.png";

export const project = [
  {
    id: 1,
    ImageHref: TimerGameImg,
    category: "game",
    title: "Final Countdown",
    liveHref: "https://pratham-timergame.vercel.app/",
    desc: "An interactive countdown game challenging players to stop the timer at the perfect moment. Test your timing and reflexes!",
  },
  {
    id: 2,
    ImageHref: cpImg1,
    category: "client projects",
    title: "Cinematography Portfolio",
    liveHref: "https://dop-portfolio.vercel.app/",
    desc: "A portfolio website for a cinematographer showcasing their work and services.",
  },
  {
    id: 3,
    ImageHref: Cinemaphile1,
    category: "websites",
    title: "Cinemaphile - A Modern Movie Review and Discussion Platform",
    liveHref: "https://cinemaphile-client.onrender.com/",
    desc: "A full-stack web application that allows users to explore, review, and discuss movies, combining a modern React frontend with a robust Node.js backend.",
    languages: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    briefDesc:
      "Cinemaphile is a comprehensive movie platform that features a modern tech stack with React 18 and TypeScript on the frontend, powered by Vite for optimal development experience. The frontend includes interactive components, real-time updates, and a clean UI built with Tailwind CSS. The backend is built on Node.js with Express, featuring secure authentication, MongoDB integration, and a RESTful API architecture. The application includes modern features like commenting system integration (Giscus) and analytics tracking, making it a full-featured platform for movie enthusiasts to share and discuss their favorite films.",
    projectPics: [
      Cinemaphile1,
      Cinemaphile2,
      Cinemaphile4,
      Cinemaphile5,
      Cinemaphile3,
      Cinemaphile6,
    ],
    features: [
      {
        title: "User Authentication System",
        desc: "Secure login and registration system with JWT token-based authentication and password encryption.",
      },
      {
        title: "Movie Search Integration",
        desc: "Advanced movie search functionality integrated with OMDB API, providing comprehensive movie information.",
      },
      {
        title: "Interactive Review System",
        desc: "Users can create, read, update, and delete movie reviews with ratings and detailed feedback.",
      },

      {
        title: "User Profile Management",
        desc: "Personalized user profiles with watch history, favorite movies, and review management.",
      },
      {
        title: "Movie Details Dashboard",
        desc: "Comprehensive movie information including plot, cast, ratings, and related recommendations.",
      },
      {
        title: "Real-time Search Experience",
        desc: "Instant search results with dynamic filtering and suggestions as users type.",
      },
      {
        title: "Top Movies Showcase",
        desc: "Curated selection of top-rated and trending movies updated regularly.",
      },
      {
        title: "Community Engagement",
        desc: "Interactive platform for users to discuss and share movie opinions through reviews and ratings.",
      },
      {
        title: "Modern UI/UX Design",
        desc: "Clean and intuitive interface built with React and Tailwind CSS for optimal user experience.",
      },
      {
        title: "Secure API Integration",
        desc: "Protected REST API endpoints with proper error handling and response formatting.",
      },

      {
        title: "User Activity Tracking",
        desc: "System for monitoring and displaying user interactions, reviews, and preferences.",
      },
    ],
  },
  {
    id: 4,
    ImageHref: myNotebookImg,
    category: "self projects",
    title: "My NoteBook",
    liveHref: "https://mynotebookv0.vercel.app/",
    desc: "Personal note-taking application for creating, organizing, and managing digital notes securely in one place.",
  },
  {
    id: 5,
    ImageHref: InvestmentImg,
    category: "self projects",
    title: "Investment Calculator",
    liveHref: "https://investment-calculator-v0.vercel.app/",
    desc: "Financial tool for calculating investment returns, compound interest, and analyzing long-term investment growth.",
  },
];
