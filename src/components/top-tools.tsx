'use client';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'next/navigation';
import Providers from '@/app/provider';
import { ThemeButton } from './theme-button';
import { twMerge } from 'tailwind-merge';
import { useRouter } from 'next/navigation';
import { DropdownNavbar } from '@/components/dropdown-navbar';
import Image from 'next/image';
import ProfileImage from '../../public/assets/berker.jpg';

export const TopTools = () => {
  const router = useRouter();
  const params = useParams();
  const cn = (...args: Array<string>) => {
    return twMerge(...args);
  };

  return (
    <div className="relative flex justify-between bg-white dark:bg-black h-16 lg:h-0 sticky top-0 z-50">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.2 }}
      >
        <DropdownNavbar />
        <div
          onClick={() => router.push('/')}
          className="absolute left-20 w-52 transition-colors mt-4"
        >
          <div className="lg:hidden flex justify-around items-center">
            <div className="avatar">
              <div className="rounded-full">
                <Image
                  src={ProfileImage}
                  width={30}
                  height={30}
                  alt="Berker Kelesoglu"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-md font-medium">Berker Keleşoğlu</span>
            </div>
          </div>
        </div>
        <FontAwesomeIcon
          onClick={() => router.push('/writings')}
          size={'lg'}
          icon={faArrowLeft}
          className={cn(
            'lg:hidden absolute left-10 mt-5 py-0.5 ml-3 cursor-pointer',
            !params.slug ? 'hidden' : ''
          )}
        />
      </motion.div>

      <Providers>
        <ThemeButton />
      </Providers>
    </div>
  );
};
