'use client';
import { getInitialProps } from '@/data/contentful';
import { WritingRow } from '@/components/writing-row';
import { MotionWrapper } from '@/components/motion-wrapper';
import { motion } from 'framer-motion';
import { client } from './[slug]/page';
interface writingType {
  title: string;
  slug: string;
  thumbnail: any;
  featuredImage: any;
  writingContent: any;
}

const fetchWritings = async () => {
  const data = await getInitialProps();
  return data.reverse();
};

export default async function Page() {
  const writings = await fetchWritings();

  return (
    <main
      className="flex items-center transition-colors"
      suppressHydrationWarning
    >
      <MotionWrapper>
        <div className="container">
          <div className="flex flex-col justify-between">
            <p className="text-4xl mb-2">Writings</p>
            <p className="text-xl p-2 text-left font-light mb-4">
              Here is my writings that I published on Medium. Not much software
              related articles now but will be more in months for sure.🛠️
            </p>
            <div className="flex flex-col w-full" suppressHydrationWarning>
              {writings.map((writing: any) => (
                <motion.div whileHover={{ scale: 1.05 }} key={writing.sys.id}>
                  <WritingRow writing={writing} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </MotionWrapper>
    </main>
  );
}
