"use client";

import { useEffect, useState } from "react";
import Logo from "../../app/assets/etutor_logo.png";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { logout } from "@/services/AuthService";
import { useUser } from "@/context/UserContext";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/contants";
import Image from "next/image";

export default function Navbar() {
  const { user, setIsLoading } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOut = () => {
    logout();
    setIsLoading(true);
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/tutors", label: "Tutors" },
    { href: "/aboutUs", label: "About Us" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-white shadow-md" : "bg-[#b6f4c93b]"
        }`}
    >
      <div className="container max-w-[1195px] flex justify-between items-center mx-auto h-16 px-5">
        <Link href="/">
          <h1 className="text-2xl font-black flex items-center">
            <Image src={Logo} alt="etutor" width={110} height={32} />
          </h1>
        </Link>
        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${pathname === href
                ? "text-[#139460] font-bold"
                : "text-gray-700 hover:text-[#139460]"
                }`}
            >
              {label}
            </Link>
          ))}
        </div>
        <nav className="flex gap-2">
          {user?.email ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>User</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={`/${user?.role}/dashboard`}>Dashboard</Link>
                </DropdownMenuItem>
                <div className="md:hidden">
                  {navLinks.map(({ href, label }) => (
                    <DropdownMenuItem key={href}>
                      <Link
                        href={href}
                        className={`${pathname === href
                          ? "text-[#139460] font-bold"
                          : "text-gray-700 hover:text-[#139460]"
                          }`}
                      >
                        {label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="bg-[#139460] cursor-pointer"
                  onClick={handleLogOut}
                >
                  <LogOut />
                  <span>Log Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button className="rounded-full" variant="outline">
                Login
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
