export default async function SlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="wrapper">{children}</div>;
}
