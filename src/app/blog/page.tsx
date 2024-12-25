import { getInitialProps } from "@/data/contentful";
import { WritingRow } from "@/components/writing-row";
import { MotionWrapper } from "@/components/motion-wrapper";
import { Entry } from "contentful";
import { EntrySkeletonType } from "contentful";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Writings",
};

const fetchWritings = async () => {
  const data = await getInitialProps();
  return data.reverse();
};

export default async function Page() {
  const writings = await fetchWritings();
  return (
    <main
      className="wrapper flex items-center transition-colors rounded-md border-1 dark:border-darkShadow border-lightSecondary"
      suppressHydrationWarning
    >
      <MotionWrapper>
        <div className="container">
          <div className="flex flex-col">
            <p className="text-xl px-2 py-4">Blog</p>
            <p className="text-lg p-2 text-left font-light mb-4">
              Here are my writings that I published on Medium.
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
