import { LinkType } from '@/models/models';
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
  faMedium,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';

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
