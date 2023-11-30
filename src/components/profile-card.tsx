import Image from 'next/image';
import ProfileImage from '@/assets/berker.jpg';

export const ProfileCard = () => {
  return (
    <div className="card w-72 transition-colors shadow-lg">
      <div className="card-body">
        <div className="flex justify-around items-center">
          <div className="avatar">
            <div className="rounded-full">
              <Image
                src={ProfileImage}
                width={40}
                height={40}
                alt="Berker Kelesoglu"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-md font-medium">Berker Keleşoğlu</span>
            <span className="card-text font-light text-left mt-2 text-sm">
              Software Developer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
