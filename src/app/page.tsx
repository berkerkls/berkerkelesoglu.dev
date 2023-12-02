'use client';
import { motion } from 'framer-motion';
import {
  faUpwork,
  faGithub,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuItem } from '@/components/menu-item';
import { Links } from '@/data/constants';

export default function Home() {
  return (
    <main className="flex transition-colors p-3 lg:p-20">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex flex-col justify-start items-start">
          <p className="text-4xl p-2">Hey there👋, I am Berker.</p>
          <p className="text-lg p-2 text-left">
            Software developer based in Istanbul. I build websites and mobile
            apps.
          </p>
          <div className="p-2 flex">
            <p className="text-lg">Collaborate with me on</p>
            <a
              href="https://www.upwork.com/freelancers/~011da68a264a1c13a8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faUpwork}
                className="h-6 w-6 mt-1 ml-2 hover:text-green-500"
              />
            </a>
          </div>
          <div className="flex justify-between items-center w-80 ml-10 mt-5 lg:hidden">
            {Links.map((el: any, index: number) => {
              return (
                <MenuItem
                  key={index}
                  href={el.href}
                  label={el.label}
                  icon={el.icon}
                />
              );
            })}
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
            <div className="card lg:w-96 w-80 shadow-md mt-4 transition-colors">
              <div className="card-body">
                <div className="card-text">
                  I am a former English Teacher who have worked in Türkiye and
                  Poland for 2 years. Now I have been moving on as Software
                  Developer for 2 years. I think website or app ideas and make
                  them come true to make life easier. See my projects on{' '}
                  <a
                    href="https://github.com/berkerkls"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="card lg:w-96 w-80 shadow-md mt-4 transition-colors">
              <div className="card-body">
                <div className="card-text">
                  I use{' '}
                  <a
                    href="https://vuejs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Vue,
                  </a>{' '}
                  <a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Next.js,
                  </a>{' '}
                  <a
                    href="https://react.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    React,
                  </a>{' '}
                  <a
                    href="https://reactnative.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    React-Native,
                  </a>{' '}
                  <a
                    href="https://nodejs.org/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Node.js
                  </a>{' '}
                  for my projects. If you have questions or any recommendations,
                  hit me up. Besides of programming,I enjoy making and listening
                  music. See my playlists on{' '}
                  <a
                    href="https://vuejs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    <FontAwesomeIcon icon={faSpotify} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
