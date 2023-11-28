export default async function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex transition-colors">
        <div className="flex justify-center w-3/4 min-h-screen">
          <div className="p-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
