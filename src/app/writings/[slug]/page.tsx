import { createClient } from 'contentful';
export const client = createClient({
  space: '9p9kpa55hqpt',
  accessToken: 'GUok4IDfbyiYLvZBtag2A6MEojDPLu5NIwXrPcmAk7s',
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
  console.log('writing', writing);
  return <div>{writing.fields.title}</div>;
}
