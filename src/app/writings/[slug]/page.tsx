import { createClient } from 'contentful';
import { MotionWrapper } from '@/components/motion-wrapper';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
export const client = createClient({
  space: `${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
});
export const getInitialPaths = async () => {
  const res = await client.getEntries({ content_type: 'writing' });

  return res.items.map((item: any) => ({ slug: item.fields.slug }));
};

export async function getInitialProps(slug: any) {
  const data = await client.getEntries({
    content_type: 'writing',
    'fields.slug': slug,
  });
  return { writing: data.items[0] };
}

export default async function WritingPage({ params }: any) {
  const { slug } = params;
  const { writing } = (await getInitialProps(slug)) as any;
  const { featuredImage, title, writingContent, publishDate, topic } =
    writing.fields;

  const renderOptions = {
    renderMark: {
      [MARKS.BOLD]: (text: any) => (
        <span className="font-semibold text-black">{text}</span>
      ),
      [MARKS.ITALIC]: (text: any) => <span className="italic">{text}</span>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_: any, children: any) => (
        <div className="mb-4 mt-4 last:mb-0 text-lg">{children}</div>
      ),
      [BLOCKS.HEADING_2]: (_: any, children: any) => (
        <div className="mb-4">{children}</div>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
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
  };

  return (
    <MotionWrapper>
      <div className="container flex flex-col">
        <p className="text-4xl mb-4">{title}</p>
        <div className="flex">
          <span className="badge mr-4 text-center badge-black">{topic}</span>
          <p className="font-light">{publishDate}</p>
        </div>
      </div>
      <div className="container">
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
        {writingContent.content.map((writingItem: any, index: any) => {
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
