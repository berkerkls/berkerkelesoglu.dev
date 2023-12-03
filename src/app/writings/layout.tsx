import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Writings',
};

export default async function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="wrapper">{children}</div>;
}
