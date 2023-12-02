'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Entry } from 'contentful';
import { EntrySkeletonType } from 'contentful';
import { FieldsType } from 'contentful';
export const WritingRow = ({
  writing,
}: {
  writing: Entry<EntrySkeletonType>;
}) => {
  const {
    title,
    slug,
    thumbnail,
    featuredImage,
    publishDate,
    topic,
  }: FieldsType = writing.fields;

  const router = useRouter();

  const routeToWriting = (route: string) => {
    router.push(route);
  };
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      key={writing.sys.id}
      onClick={() => routeToWriting(`/writings/${slug}`)}
      className="lg:grid lg:grid-cols-5 font-medium mb-8 p-4 border-b-2 cursor-pointer"
    >
      <div className="flex lg:justify-between items-start col-span-2 cursor-pointer">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <Image
              src={`https:${thumbnail.fields.file.url}`}
              alt={title}
              width={100}
              height={100}
              priority
              className="object-fit object-cover"
            />
          </div>
        </div>
        <div className="font-bold ml-4">{title}</div>
      </div>

      <div className="text-right">
        <span className="badge badge-outline badge-sm w-22">{publishDate}</span>
      </div>

      <div className="xs:hidden lg:flex justify-end">
        <span className="badge badge-default badge-sm p-2 text-gray-300">
          {topic}
        </span>
      </div>
      <div className="xs:hidden lg:flex justify-end">
        <Link
          href={`/writings/${slug}`}
          className="btn btn-outline text-black btn-xs border "
        >
          Read
        </Link>
      </div>
    </motion.div>
  );
};
