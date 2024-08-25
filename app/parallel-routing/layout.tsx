export default function ParallelRoutingLayout({
  children,
  notifications,
  quiz,
  answers,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  quiz: React.ReactNode;
  answers: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div className=" flex gap-0">
        <div className=" w-1/2">
          {notifications}
          {quiz}
        </div>
        <div className=" w-1/2">{answers}</div>
      </div>
    </>
  );
}
