import { Timeline } from "@/components/timeline";
import { MotionWrapper } from "@/components/motion-wrapper";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Journey",
};
export default function Layout() {
  return (
    <main className="wrapper flex justify-center items-center rounded-md transition-colors dark:border-darkShadow border-lightSecondary border-1">
      <MotionWrapper>
        <div className="container">
          <div className="flex flex-col">
            <p className="text-xl px-2 py-4">Journey</p>
            <div className="card shadow-md mt-4 transition-colors">
              <div className="card-body w-full">
                <Timeline />
              </div>
            </div>
          </div>
        </div>
      </MotionWrapper>
    </main>
  );
}
