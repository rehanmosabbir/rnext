export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ul className=" flex gap-5 p-4">
        <li>Settings</li>
        <li>Analytics</li>
      </ul>
      {children}
    </div>
  );
}
