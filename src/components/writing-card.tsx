'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
export const WritingCard = ({ writing }: any) => {
  const { title, slug, thumbnail, featuredImage } = writing.fields;

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="card card-compact w-96  shadow-xl m-8"
    >
      <figure>
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          alt="Shoes"
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn dark:bg-white dark:text-black">Read</button>
        </div>
      </div>
    </motion.div>
  );
};
