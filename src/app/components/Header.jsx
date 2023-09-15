// TOOLS
import Image from "next/image";

// ICONS
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
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
        <div className="flex space-x-4 items-center">
          <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          <img
            src="https://www.outkick.com/wp-content/uploads/ian-miller-1536x1536.jpg"
            alt="user-image"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
