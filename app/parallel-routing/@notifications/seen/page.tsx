import Link from "next/link";

export default function SeenNotification() {
  return (
    <div className=" border border-1 p-4 h-[250px] flex items-center justify-center">
      <p className=" text-center">Notifications</p>
      <Link href={`/parallel-routing`} className=" text-blue-500 ml-4">
        Seen Notification
      </Link>
    </div>
  );
}
