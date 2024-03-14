import { createClient } from "contentful";
const client = createClient({
  space: `${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
});
export async function getInitialProps() {
  const res = await client.getEntries({ content_type: "writing" });
  return res.items ?? [];
}
