// TOOLS
import Image from "next/image";

export default function Header() {
  return (
    <div>
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

        {/* RIGHT */}
        <h1>Right Side</h1>
      </div>
    </div>
  );
}
