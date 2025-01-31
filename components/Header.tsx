import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathName = usePathname();
  return (
    <div className="my=10 flex justify-between gap-5">
      <Link href={"/"}>BookWise</Link>
      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href={"/library"}
            className={cn(
              "text-base cursor-pointer capitalize",
              pathName === "/library" ? "text-light-100" : "text-light-200"
            )}
          >
            Library
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
