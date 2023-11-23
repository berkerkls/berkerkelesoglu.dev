import { Timeline } from '@/components/timeline';

export default function Home() {
  return (
    <main className="flex items-center">
      <div className="flex flex-col justify-between">
        <p className="text-2xl p-2">Hi👋, I am Berker.</p>
        <p className="text-xl p-2 text-left font-light">
          I am a Software Developer and currently working in Istanbul. Former
          English Teacher who have worked in Türkiye and Poland for 2 years. Now
          I have been moving on as Software Developer for 2 years.
        </p>

        <div className="card shadow-xl m-6">
          <div className="card-body">
            <h2 className="card-title p-4">Journey</h2>
            <div>
              <Timeline />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
