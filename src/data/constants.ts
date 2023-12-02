import { LinkType } from '@/models/models';
import { JourneyItemType } from '@/models/models';
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
  faMedium,
  faSpotify
} from '@fortawesome/free-brands-svg-icons';

import { faHouse, faPencil, faMusic, faTimeline } from '@fortawesome/free-solid-svg-icons';

export const Links: Array<LinkType> = [
  {
    href: 'https://twitter.com/berkerkls',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    href: 'https://www.instagram.com/berker.kls/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    href: 'https://www.linkedin.com/in/berkerkelesoglu/',
    label: 'Linkedin',
    icon: faLinkedin,
  },
  {
    href: 'https://github.com/berkerkls',
    label: 'Github',
    icon: faGithub,
  },
  {
    href: 'https://medium.com/@berkerkelesoglu',
    label: 'Medium',
    icon: faMedium,
  },
  {
    href: 'https://open.spotify.com/user/11125431324?si=e0d5cdbc4d004919&nd=1&dlsi=c2b35fd0f4564917',
    label: 'Spotify',
    icon: faSpotify,
  },
];

export const Navigations: Array<LinkType> = [
  {
    href: '/',
    label: 'Home',
    icon: faHouse,
  },
  {
    href: '/journey',
    label: 'Journey',
    icon: faTimeline,
  },
  {
    href: '/writings',
    label: 'Writings',
    icon: faPencil,
  },
  // {
  //   href: '/musictools',
  //   label: 'Tools',
  //   icon: faMusic,
  // },
];

export const Journey: Array<JourneyItemType> = [
  {
    title: 'Frontend Developer 💻',
    university: null,
    company: 'Intime Info Yazılım Çözümleri',
    startDate: 'November 2022',
    endDate: null,
    description:
      'My first and current job in software development. I have learnt many things, gained experience and I keep going.',
  },
  {
    title: 'React Native Bootcamp Assistant 💻',
    university: null,
    company: 'Kodluyoruz',
    startDate: 'November 2022',
    endDate: null,
    description:
      'Helping and learning was a great experience besides meeting new people in React Native Bootcamp.',
  },
  {
    title: 'Frontend Development Bootcamp 💻',
    university: null,
    company: 'Kodluyoruz',
    startDate: 'August 2022',
    endDate: 'September 2022',
    description:
      'I learnt many tips and infos about React and JavaScript, also met with great people in the bootcamp.',
  },
  {
    title: 'English Teacher 📖',
    university: null,
    company: 'Bursa Çağdaş Öncü Schools',
    startDate: 'June 2022',
    endDate: 'October 2022',
    description: 'This was the last teaching experience I have had.',
  },
  {
    title: 'Coming Back To Turkey 🛬',
    university: null,
    company: null,
    startDate: 'March 2022',
    endDate: null,
    description:
      'I decided to come back to my hometown and focus to my software development learning process.',
  },
  {
    title: 'Self Learning Process 💻',
    university: null,
    company: null,
    startDate: 'February 2022',
    endDate: '♾️',
    description:
      'I have started to learn software development by myself watching some videos on Youtube and Udemy, still imporving myself. It seems it will never stops💪',
  },
  {
    title: 'English Teacher 📖',
    university: null,
    company: 'Cracow International Schools',
    startDate: 'September 2021',
    endDate: 'March 2022',
    description:
      'After 3 months of internship in Krakow, I got a job offer as English Teacher in Poland. It was a great experience.',
  },
  {
    title: 'Moving To Poland 🛫',
    university: null,
    company: null,
    startDate: 'September 2021',
    endDate: null,
    description: 'I entitled to have an internship in Krakow.',
  },
  {
    title: 'English Teacher 📖',
    university: null,
    company: 'Bursa Kültür Schools',
    startDate: 'June 2020',
    endDate: 'June 2021',
    description:
      'After I graduated from university and felt suffocated during the pandemic, I have decided to find a job related with the department I have studied.',
  },
  {
    title: 'Graduated From English Language Teaching 🎓',
    university: 'Trakya University(Bachelor Degree)',
    company: null,
    startDate: 'September 2016',
    endDate: 'June 2020',
    description: 'Graduated from university.',
  },
  {
    title: 'Born 👶',
    university: null,
    company: null,
    startDate: 'September 1997',
    endDate: null,
    description: 'Saw the light of day.',
  },
];
