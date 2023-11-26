'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
export const WritingCard = ({ writing }: any) => {
  const { title, slug, thumbnail, featuredImage, publishDate, topic } =
    writing.fields;

  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <div className="grid grid-cols-5 font-medium mb-8 p-4 border-b-2 cursor-pointer">
        <div className="flex justify-between items-start col-span-2">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <Image
                src={`https:${thumbnail.fields.file.url}`}
                alt="Shoes"
                width={thumbnail.fields.file.details.image.width}
                height={thumbnail.fields.file.details.image.height}
              />
            </div>
          </div>
          <div className="font-bold ml-4">{title}</div>
        </div>

        <div className="text-right">
          <span className="badge badge-outline badge-sm w-22">
            {publishDate}
          </span>
        </div>

        <div className="text-right ">
          <span className="badge badge-default badge-sm p-2 text-gray-300">
            {topic}
          </span>
        </div>
        <div className="text-right ">
          <button className="btn btn-outline text-black btn-xs border ">
            Read
          </button>
        </div>
      </div>
    </motion.div>
  );
};
