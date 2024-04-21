"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

import Image from "next/image";
import logo from "@/public/logo.svg";
import { ModeToggle } from "./mode-toggle";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="dark:bg-gray-900 bg-gray-100 py-1">
      <div className="p-5 container flex justify-between items-center">
        {/* The logo */}
        <Link
          href="/"
          className="flex items-center gap-3 md:ml-5 cursor-pointer"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-gray-400 rounded-full flex items-center justify-center">
            <Image
              src={logo}
              alt="Logo"
              width={40}
              height={40}
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </div>
          <h1 className="text-xl font-bold">Tripper!</h1>
        </Link>

        {/* SignUp and Logging Buttons */}
        <div className="flex items-center gap-3 md:mr-5">
          {session ? (
            <div className="flex gap-3 items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="cursor-pointer">
                    <div className="flex gap-2 items-center">
                      <Avatar>
                        <AvatarImage
                          src={session?.user?.image ?? ""}
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <h1 className="text-lg">{session?.user?.name}</h1>
                    </div>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Button
                    type="submit"
                    variant="link"
                    onClick={() => signOut()}
                  >
                    LogOut
                  </Button>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <Button
              onClick={() => signIn("google")}
              variant="default"
              className="font-semibold"
            >
              SignUp
            </Button>
          )}

          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
