import { getInitialProps } from '@/data/contentful';
export default async function siteMap() {
  const baseUrl = 'https://www.berkerkelesoglu.dev'
  //  Get all entries
  const writings = await getInitialProps()
  const writingsUrls = writings?.map(writing => {
    return {
      url: `${baseUrl}/writings/${writing.fields.slug}`,
      lastModified: new Date()
    }
  }) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...writingsUrls
  ]
}