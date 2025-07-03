"use client";

export default function Navbar() {


  return (
    <div className="w-full flex flex-row justify-between px-[30px] py-[10px]">
      <p className="font-black text-[25px]"> Tarana Aliyeva</p>
      <div className="flex flex-row gap-[20px] text-white font-medium text-[18px]">
        {/* {links.map((link) => (
          <Link
            key={link.href}
            className={`hover:text-blue-600 cursor-pointer ${
              link.href === "/"
                ? pathName === "/"
                  ? "underline text-blue-600"
                  : ""
                : pathName.startsWith(link.href)
                ? "underline text-blue-600"
                : ""
            }`}
            href={link.href}
          >
            {link.label}
          </Link>
        ))} */}
      </div>
    </div>
  );
}
