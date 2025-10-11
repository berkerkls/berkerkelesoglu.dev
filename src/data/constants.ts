import { LinkType } from "@/models/models";
import { JourneyItemType } from "@/models/models";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
  faMedium,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";

import {
  faHouse,
  faPencil,
  faMusic,
  faTimeline,
} from "@fortawesome/free-solid-svg-icons";

export const Links: Array<LinkType> = [
  {
    href: "https://www.linkedin.com/in/berkerkelesoglu/",
    label: "Linkedin",
  },
  {
    href: "https://github.com/berkerkls",
    label: "Github",
  },
  {
    href: "https://medium.com/@berkerkelesoglu",
    label: "Medium",
  },
];

export const Navigations: Array<LinkType> = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/journey",
    label: "Journey",
  },
  // {
  //   href: '/musictools',
  //   label: 'Tools',
  //   icon: faMusic,
  // },
];

export const Journey: Array<JourneyItemType> = [
  {
    title: "Started Master's Degree in Software Engineering 🎓",
    university: "Boğaziçi University",
    company: null,
    startDate: "September 2025",
    endDate: "June 2027",
    description:
      "Started to study master's degree in the field of Software Engineering.",
  },
  {
    title: "Frontend Developer 💻",
    university: null,
    company: "Fair Technology",
    startDate: "May 2024",
    endDate: null,
    description:
      "Developing mobile and web applications with React Native and Vue.js",
  },
  {
    title: "Frontend Developer 💻",
    university: null,
    company: "Intime Info",
    startDate: "November 2022",
    endDate: "May 2024",
    description:
      "My first job in software development. I have learnt many things, gained experience.",
  },
  {
    title: "React Native Bootcamp Assistant 💻",
    university: null,
    company: "Kodluyoruz",
    startDate: "November 2022",
    endDate: null,
  },
  {
    title: "Frontend Development Bootcamp 💻",
    university: null,
    company: "Kodluyoruz",
    startDate: "August 2022",
    endDate: "September 2022",
    description: "I learnt many tips and infos about React and JavaScript.",
  },
  {
    title: "Self Learning Process 💻",
    university: null,
    company: null,
    startDate: "February 2022",
    endDate: null,
  },
  {
    title: "Moving To Poland 🛫",
    university: null,
    company: null,
    startDate: "September 2021",
    endDate: null,
    description:
      "I entitled to have an English Language Teaching internship  in Krakow.",
  },
  {
    title: "English Teacher 📖",
    university: null,
    company: "Bursa Kültür Schools",
    startDate: "June 2020",
    endDate: "June 2021",
  },
  {
    title: "Graduated From English Language Teaching 🎓",
    university: "Trakya University(Bachelor Degree)",
    company: null,
    startDate: "September 2016",
    endDate: "June 2020",
  },
];
