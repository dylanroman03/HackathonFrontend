"use client";

import { Store } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import '../../app/globals.css';

const Navbar = () => {
  const pathName = usePathname();
  const RenderNull = pathName === "/login" || pathName === "/signup";

  return (
    <>
      {RenderNull ? null : (
        <nav className="flex justify-between !items-center py-4 px-20 bg-white shadow-md">
          <Link href={"/"} className="flex !items-center gap-2">
            <Store className="size-10" />
            <h2 className="flex text-2xl">AI-NFT prediction marketplace</h2>
          </Link>
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              {/* <Link href={"/docs"}>Docs</Link>
              <Link href={"/about"}>About</Link> */}
            </div>
            {/* <div className="flex gap-4">
              <Link href={"/login"}>
                <Button variant={"secondary"} className="w-[120px] h-[50px] text-white">
                Login
              </Button>
            </Link>
            <Link href={"/signup"}>
              <Button className="w-[120px] h-[50px]">Sign Up</Button>
            </Link>
          </div> */}
        </div>
        </nav >
      )}
    </>
  );
};

export default Navbar;
