"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="absolute left-0 right-0 top-0 w-screen text-base flex justify-end items-center px-[200px] py-9 gap-16 font-medium text-white font-gmarketSans">
      <Link href="/" className={cn("relative", pathname === "/" && "location")}>
        학원 소개
      </Link>
      <Link
        href="/curriculum"
        className={cn(pathname === "/curriculum" && "location")}
      >
        교육과정
      </Link>
      <Link
        href="/location"
        className={cn(pathname === "/location" && "location")}
      >
        오시는길
      </Link>
    </header>
  );
};

export default Header;
