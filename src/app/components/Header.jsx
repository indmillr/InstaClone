// TOOLS
import Image from "next/image";

// ICONS
import { SearchIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl">
      {/* LEFT */}
      <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fC9RcIThIiiPwJRlgIFS_ipSIFEmfPk7Ig&usqp=CAU"
          layout="fill"
          className="object-contain"
        />
      </div>
      <div className="h-24 w-10 relative lg:hidden cursor-pointer">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png"
          layout="fill"
          className="object-contain"
        />
      </div>

      {/* MIDDLE */}
      <div className="relative mt-1">
        <div className="absolute top-2 left-2">
          <SearchIcon className="h-5 text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
        />
      </div>

      {/* RIGHT */}
      <h1>Right Side</h1>
    </div>
  );
}
