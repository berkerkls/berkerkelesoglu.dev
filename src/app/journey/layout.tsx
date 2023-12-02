export default async function JourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="wrapper">{children}</div>;
}
