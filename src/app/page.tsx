import Image from 'next/image';
import { ProfileCard } from '@/components/profile-card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <ProfileCard />
    </main>
  );
}
