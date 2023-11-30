'use client';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'next/navigation';
import Providers from '@/app/provider';
import { ThemeButton } from './theme-button';
import { twMerge } from 'tailwind-merge';
import { useRouter } from 'next/navigation';

export const TopTools = () => {
  const router = useRouter();
  const params = useParams();
  const cn = (...args: Array<string>) => {
    return twMerge(...args);
  };

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.2 }}
      >
        <FontAwesomeIcon
          onClick={() => router.push('/writings')}
          size={'xs'}
          icon={faArrowLeft}
          className={cn(
            'btn btn-xs btn-ghost lg:hidden absolute left-4 mt-4 cursor-pointer',
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
