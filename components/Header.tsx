"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="absolute left-0 right-0 top-0 w-screen text-base flex-col flex items-center sm:flex-row px-6 sm:px-[100px] xl:px-[200px] py-9 font-medium text-white font-gmarketSans">
      <div className="sm:ml-0 sm:mr-auto mx-auto mt-6 sm:mt-0 order-2 sm:order-1">
        <img src="/logo.png" alt="logo" height={69} width={100} />
      </div>
      <nav className="sm:mr-0 sm:ml-auto flex gap-6 xl:gap-16 order-1 sm:order-2 justify-center">
        <Link
          href="/"
          className={cn("relative", pathname === "/" && "location")}
        >
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
      </nav>
    </header>
  );
};

export default Header;
