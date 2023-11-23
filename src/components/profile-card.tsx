import Image from 'next/image';
import ProfileImage from '@/assets/berker.jpg';

export const ProfileCard = () => {
  return (
    <div className="card w-96 transition-colors shadow-xl">
      <div className="card-body">
        <div className="flex justify-between items-center w-64">
          <div className="avatar">
            <div className="rounded-full">
              <Image
                src={ProfileImage}
                width={50}
                height={50}
                alt="picture of myself"
                priority={true}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="card-title">Berker Keleşoğlu</span>
            <span className="card-text text-left mt-2 text-sm">
              Software Developer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
