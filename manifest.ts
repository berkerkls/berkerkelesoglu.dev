import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Berker Kelesoglu',
    short_name: 'berkerkelesoglu',
    description: 'Hey there👋 I am Berker. Software developer based in Istanbul. I build websites and mobile apps.',
    start_url: 'https://www.berkerkelesoglu.dev/',
    display: 'standalone',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}