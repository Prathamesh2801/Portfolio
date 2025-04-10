import TimerGameImg from "../project banner/timerGame/timer.png";
import PlaceKeeperImg from "../project banner/placeKeeper/placeKeeper.png";
import InvestmentImg from "../project banner/InvestmentCal/investment.png";

import Cinemaphile1 from "../project banner/Cinemaphile/p1_home.png";
import Cinemaphile2 from "../project banner/Cinemaphile/p1_browse.png";
import Cinemaphile3 from "../project banner/Cinemaphile/p1_reviews.png";
import Cinemaphile4 from "../project banner/Cinemaphile/p1_bookmarks.png";
import Cinemaphile5 from "../project banner/Cinemaphile/p1_login.png";
import Cinemaphile6 from "../project banner/Cinemaphile/p1_register.png";

import dop1 from "../project banner/Dop/cpImg1.png";
import dop2 from "../project banner/Dop/cpImg2.png";
import dop3 from "../project banner/Dop/cpImg3.png";
import dop4 from "../project banner/Dop/cpImg4.png";
import dop5 from "../project banner/Dop/cpImg5.png";
import dop6 from "../project banner/Dop/cpImg6.png";
import dop7 from "../project banner/Dop/cpImg7.png";

export const project = [
  {
    id: 1,
    ImageHref: TimerGameImg,
    category: "self projects",
    title: "Precision Timer Game",
    liveHref: "https://pratham-timergame.vercel.app/", // Local development URL
    desc: "A challenging timer-based game that tests your precision and timing skills. Stop the timer as close to the target time as possible to achieve the highest score.",
    bannerPage: "Precision Timer",
    languages: ["React", "Tailwind CSS", "DaisyUI", "Framer Motion", "Vite"],
    briefDesc:
      "A fun and engaging timer-based game built with modern React technologies. The game challenges players to stop a timer at a specific target time, calculating their score based on accuracy. The application features a clean, responsive design with smooth animations and interactive feedback.",
    projectPics: [],
    features: [
      {
        title: "Precision Timing",
        desc: "Challenge yourself to stop the timer as close to the target time as possible for maximum points.",
      },
      {
        title: "Score Calculation",
        desc: "Automatic score calculation based on timing accuracy, with higher scores for better precision.",
      },
      {
        title: "Modal Feedback",
        desc: "Interactive result modal that displays your score, target time, and remaining time.",
      },
      {
        title: "Responsive Design",
        desc: "Fully responsive interface that works seamlessly on desktop and mobile devices.",
      },
      {
        title: "Smooth Animations",
        desc: "Fluid animations using Framer Motion for enhanced user experience.",
      },
      {
        title: "Interactive Elements",
        desc: "Dynamic UI elements that provide immediate feedback during gameplay.",
      },
      {
        title: "Game Reset",
        desc: "Easy-to-use reset functionality that allows players to start a new game quickly.",
      },

      {
        title: "Cross-platform Compatibility",
        desc: "Works perfectly across all modern browsers and devices.",
      },
    ],
  },
  {
    id: 2,
    ImageHref: dop2,
    category: "client projects",
    title: "Vivek Dubey - Professional Cinematographer Portfolio",
    liveHref: "https://vivek-dubey-portfolio.vercel.app/",
    desc: "A modern, responsive portfolio showcasing the cinematographic work of Vivek Dubey across commercials, music videos, web series, and feature films.",
    bannerPage: "Cinematography",
    languages: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Framer Motion",
      "Cloudinary",
    ],
    briefDesc:
      "A comprehensive cinematography portfolio that showcases various projects across different genres. The website features a modern tech stack with React 18 and Vite for optimal performance. It includes interactive components, smooth animations with Framer Motion, and a responsive design built with Tailwind CSS and DaisyUI. The portfolio efficiently manages media assets through Cloudinary integration, ensuring optimal loading times and quality across devices.",
    projectPics: [dop1, dop2, dop3, dop4, dop5, dop6, dop7],
    features: [
      {
        title: "Dynamic Media Showcase",
        desc: "Integrated Cloudinary for optimized image and video delivery with automatic quality and format optimization.",
      },
      {
        title: "Responsive Masonry Layout",
        desc: "Implemented react-responsive-masonry for an elegant grid layout that adapts to different screen sizes.",
      },
      {
        title: "Animated Transitions",
        desc: "Smooth page transitions and element animations using Framer Motion for enhanced user experience.",
      },
      {
        title: "Category-based Navigation",
        desc: "Organized work into distinct categories including Commercials, Music Videos, Short Films, Feature Films, and Web Series.",
      },
      {
        title: "Interactive Project Details",
        desc: "Detailed project views with descriptions, credits, and high-quality video previews.",
      },
      {
        title: "Professional Bio Section",
        desc: "Comprehensive about section highlighting experience, expertise, and key projects across different genres.",
      },
      {
        title: "Dynamic Typography",
        desc: "Custom typewriter effect for engaging text presentation in the hero section.",
      },
      {
        title: "Contact Integration",
        desc: "Direct contact options including phone, email, and IMDB profile links.",
      },
      {
        title: "Modern UI Components",
        desc: "Custom-designed components using DaisyUI and Tailwind CSS for a polished look.",
      },
      {
        title: "Optimized Performance",
        desc: "Built with Vite for fast development and optimized production builds with efficient asset loading.",
      },
      {
        title: "Cross-platform Compatibility",
        desc: "Fully responsive design ensuring optimal viewing experience across all devices and screen sizes.",
      },
    ],
  },
  {
    id: 3,
    ImageHref: Cinemaphile1,
    category: "websites",
    title: "Cinemaphile - A Modern Movie Review and Discussion Platform",
    liveHref: "https://cinemaphile-client.onrender.com/",
    desc: "A full-stack web application that allows users to explore, review, and discuss movies, combining a modern React frontend with a robust Node.js backend.",
    languages: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    bannerPage: "Cinemaphile",
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
    ImageHref: PlaceKeeperImg,
    category: "self projects",
    title: "Place Picker",
    liveHref: "https://place-picker-v0.vercel.app/",
    desc: "A React-based place picker application that helps users select and manage locations using geolocation and distance sorting.",
    bannerPage: "Place Picker",
    languages: ["React 18", "Vite", "JavaScript"],
    briefDesc:
      "A React application that allows users to pick and manage places using geolocation. Built with React 18 and Vite, featuring a modern UI and location-based functionality.",
    projectPics: [],
    features: [
      {
        title: "Geolocation Integration",
        desc: "Utilizes browser geolocation to sort places by distance from user's current location.",
      },
      {
        title: "React Hooks",
        desc: "Leverages modern React hooks including useEffect, useState, and useRef for state management.",
      },
      {
        title: "Component-based Architecture",
        desc: "Organized code structure with reusable components for better maintainability.",
      },
      {
        title: "Local Storage",
        desc: "Persists selected places using localStorage for data persistence.",
      },
      {
        title: "Vite Integration",
        desc: "Built with Vite for fast development and optimized production builds.",
      },
      {
        title: "Modern UI",
        desc: "Clean and user-friendly interface for place selection and management.",
      },
      {
        title: "TypeScript Support",
        desc: "Includes TypeScript configuration for type safety and better development experience.",
      },
    ],
  },
  {
    id: 5,
    ImageHref: InvestmentImg,
    category: "self projects",
    title: "Investment Calculator",
    liveHref: "https://investment-calculator-v0.vercel.app/",
    desc: "A modern investment calculator built with React and Vite, designed to help users calculate and visualize their investment growth.",
    bannerPage: "Investment Calculator",
    languages: ["React 18", "Vite", "TypeScript"],
    briefDesc:
      "A React-based investment calculator application that helps users calculate investment growth. Built with modern tools including React 18, Vite for fast development, and TypeScript for type safety. The project follows best practices with ESLint for code quality.",
    projectPics: [],
    features: [
      {
        title: "Modern Development Setup",
        desc: "Built with Vite for fast development and optimized production builds.",
      },

      {
        title: "React 18",
        desc: "Leverages the latest React features and performance improvements.",
      },
      {
        title: "Component-based Architecture",
        desc: "Organized code structure with reusable components for better maintainability.",
      },
      {
        title: "Development Tools",
        desc: "Includes development and preview scripts for easy local testing.",
      },
      {
        title: "Production Ready",
        desc: "Includes build configuration for deployment.",
      },
      {
        title: "Modern UI",
        desc: "Clean and modern interface for investment calculations.",
      },
      {
        title: "Performance Optimized",
        desc: "Built with Vite for fast development and optimized production builds.",
      },
    ],
  },
  // {
  //   id: 4,
  //   ImageHref: myNotebookImg,
  //   category: "self projects",
  //   title: "My NoteBook",
  //   liveHref: "https://mynotebookv0.vercel.app/",
  //   desc: "Personal note-taking application for creating, organizing, and managing digital notes securely in one place.",
  // },
];
