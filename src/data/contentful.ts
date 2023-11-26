import { createClient } from 'contentful';
export const client = createClient({
  space: '9p9kpa55hqpt',
  accessToken: 'GUok4IDfbyiYLvZBtag2A6MEojDPLu5NIwXrPcmAk7s',
});
export async function getInitialProps(context?: any) {
  const res = await client.getEntries({ content_type: 'writing' });
  return res.items ?? [];
}