import { FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";

function Admin() {
  return (
    <div className="bg-[#131517] min-h-screen w-full flex items-center justify-center text-white">
      <div className="w-[395px] h-[462px] text-lg rounded-xl py-11 px-8 bg-[#282932] flex flex-col text-center p-5 gap-8">
        <div>
          <p>Welcome Back</p>
          <p className="text-[#FFFFFFBF] text-sm">Login into your Account</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <label for="Email">Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            id="Email"
            className="border-2 border-[#D0D5DD] bg-transparent p-2 rounded-lg w-full"
          />
        </div>
        <div className="flex flex-col items-start gap-2 relative">
          <label for="Password">Password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            id="Password"
            className="border-2 border-[#D0D5DD] bg-transparent p-2 rounded-lg w-full"
          />
          <div className="absolute bottom-4 right-4 cursor-pointer">
            <FaRegEyeSlash />
          </div>
        </div>
        <Link
          href="/admin/dashboard/projects"
          type="submit"
          className="bg-[#4E92F3] p-4 rounded-lg"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Admin;
