import { createClient } from 'contentful';
export async function getInitialProps() {
  const client = createClient({
    space: '9p9kpa55hqpt',
    accessToken: 'GUok4IDfbyiYLvZBtag2A6MEojDPLu5NIwXrPcmAk7s',
  });

  const res = await client.getEntries({ content_type: 'writing' });
  return res.items ?? [];
}