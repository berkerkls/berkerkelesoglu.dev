import { createClient } from 'contentful';
import { MotionWrapper } from '@/components/motion-wrapper';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Entry } from 'contentful';
import { EntrySkeletonType } from 'contentful';
import { FieldsType } from 'contentful';
import { Document } from '@contentful/rich-text-types';
import Image from 'next/image';

interface WritingObject {
  params: SlugObject;
}
interface SlugObject {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const { writing } = (await fetchSingleWriting(params.slug)) as {
      writing: Entry<EntrySkeletonType>;
    };
    if (!writing) {
      return {
        title: 'Not Found',
        description: 'The page you are looking for does not exist',
      };
    }
    return {
      title: writing.fields.title,
      description: writing.fields.title,
      alternates: {
        canonical: `/writings/${writing.fields.slug}`,
        languages: {
          'en-US': `/en-US/writings/${writing.fields.slug}`,
          'de-DE': `/de-DE/writings/${writing.fields.slug}`,
        },
      },
    };
  } catch (error) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist',
    };
  }
}

export const generateStaticParams = async () => {
  const client = createClient({
    space: `${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    accessToken: `${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
  });
  const res = await client.getEntries({ content_type: 'writing' });

  return res.items.map((item: Entry<EntrySkeletonType>) => ({
    slug: item.fields.slug,
  }));
};

async function fetchSingleWriting(slug: string) {
  const client = createClient({
    space: `${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    accessToken: `${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
  });
  const data = await client.getEntries({
    content_type: 'writing',
    'fields.slug': slug,
  });
  return { writing: data.items[0] };
}

export default async function WritingPage({ params }: WritingObject) {
  const { slug } = params;
  const { writing } = (await fetchSingleWriting(slug)) as {
    writing: Entry<EntrySkeletonType>;
  };
  const {
    featuredImage,
    title,
    writingContent,
    publishDate,
    topic,
  }: FieldsType = writing.fields;

  const renderOptions = {
    renderMark: {
      [MARKS.BOLD]: (text: string) => (
        <span className="font-semibold text-black">{text}</span>
      ),
      [MARKS.ITALIC]: (text: string) => <span className="italic">{text}</span>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_: unknown, children: string) => (
        <div className="mb-4 mt-4 last:mb-0 text-lg ">{children}</div>
      ),
      [BLOCKS.HEADING_2]: (_: unknown, children: string) => (
        <div className="mb-4">{children}</div>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: Document) => {
        return (
          <Image
            src={`https:${node.data.target.fields.file.url}`}
            width={1720}
            height={900}
            alt={node.data.target.fields.file.fileName}
            className="mb-6 mt-6"
          ></Image>
        );
      },
    },
  } as any;

  return (
    <MotionWrapper>
      <div className="flex flex-col lg:mt-0 xs:mt-10">
        <p className="text-4xl mb-4 xs:text-2xl">{title}</p>
        <div className="flex flex-col lg:flex-row">
          <span className="badge mr-4 mb-4 p-2 text-center badge-black xs:badge-xs xs:text-xs">
            {topic}
          </span>
          <p className="font-light xs:text-sm">{publishDate}</p>
        </div>
      </div>
      <div className="content">
        {featuredImage && (
          <Image
            src={`https:${featuredImage.fields.file.url}`}
            width={featuredImage.fields.file.details.image.width}
            height={featuredImage.fields.file.details.image.height}
            alt="foto"
            className="object-fit mt-12 mb-10"
            priority
          />
        )}
        {writingContent.content.map((writingItem: Document, index: number) => {
          return (
            <div key={index}>
              {documentToReactComponents(writingItem, renderOptions)}
            </div>
          );
        })}
      </div>
    </MotionWrapper>
  );
}
