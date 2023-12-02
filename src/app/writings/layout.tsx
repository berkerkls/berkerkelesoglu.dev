export default async function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="wrapper">{children}</div>;
}
