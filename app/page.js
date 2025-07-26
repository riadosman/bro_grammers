import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div className="bg-[#131517] min-h-screen w-full flex items-center justify-center text-white">
        <div className="w-[395px] text-lg rounded-xl py-11 px-8 bg-[#282932] flex flex-col text-center p-5 gap-8">
          <Link
            href="/admin/dashboard/projects"
            type="submit"
            className="bg-[#4E92F3] p-4 rounded-lg"
          >
            Admin
          </Link>
          <Link
            href="/user"
            type="submit"
            className="bg-[#4E92F3] p-4 rounded-lg"
          >
            User
          </Link>
        </div>
      </div>
    </div>
  );
}
