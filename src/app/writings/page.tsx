import { getInitialProps } from '@/data/contentful';
import { WritingCard } from '@/components/writing-card';
import { MotionWrapper } from '@/components/motion-wrapper';

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
    <MotionWrapper>
      <div className="flex flex-col justify-between">
        <p className="text-4xl">Writings</p>
        <p className="text-xl p-2 text-left font-light">
          Here is my writings that I published on Medium. Not much software
          related articles now but will be more for sure in months.
        </p>
        <div className="flex items-left text-xl py-16">
          {writings.map((writing: any) => (
            <WritingCard key={writing.sys.id} writing={writing} />
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
}
