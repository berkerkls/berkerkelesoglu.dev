import { client } from "@/app/writings/[slug]/page";
export async function getInitialProps() {
  const res = await client.getEntries({ content_type: 'writing' });
  return res.items ?? [];
}