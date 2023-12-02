import { Timeline } from '@/components/timeline';
import { MotionWrapper } from '@/components/motion-wrapper';

export default function Layout() {
  return (
    <main className="flex items-center transition-colors">
      <MotionWrapper>
        <div className="container">
          <div className="flex flex-col">
            <p className="text-xl p-2">Journey</p>
            <div className="card shadow-xl mt-4 transition-colors">
              <div className="card-body">
                <Timeline />
              </div>
            </div>
          </div>
        </div>
      </MotionWrapper>
    </main>
  );
}
