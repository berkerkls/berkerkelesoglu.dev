import { getInitialProps } from '@/data/contentful';
import { WritingRow } from '@/components/writing-row';
import { MotionWrapper } from '@/components/motion-wrapper';
import { Entry } from 'contentful';
import { EntrySkeletonType } from 'contentful';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Writings',
};

const fetchWritings = async () => {
  const data = await getInitialProps();
  return data.reverse();
};

export default async function Page() {
  const writings = await fetchWritings();
  console.log('writings', writings);

  return (
    <main
      className="wrapper flex items-center transition-colors"
      suppressHydrationWarning
    >
      <MotionWrapper>
        <div className="container">
          <div className="flex flex-col justify-between">
            <p className="text-xl mb-2">Writings</p>
            <p className="text-lg p-2 text-left font-light mb-4">
              Here are my writings that I published on Medium. Not much software
              related articles now but will be more in months for sure.🛠️
            </p>
            <div className="flex flex-col w-full" suppressHydrationWarning>
              {writings.map((writing: Entry<EntrySkeletonType>) => (
                <WritingRow writing={writing} key={writing.sys.id} />
              ))}
            </div>
          </div>
        </div>
      </MotionWrapper>
    </main>
  );
}
