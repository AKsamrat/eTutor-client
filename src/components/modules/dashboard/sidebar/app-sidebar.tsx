"use client"

import * as React from "react"
import {
  Bot,


  SquareTerminal,
} from "lucide-react"


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,

} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import Link from "next/link"
import Logo from "../../../../app/assets/etutor_logo.png";
import Image from "next/image"
import { useUser } from "@/context/UserContext"


// This is sample data.
const data = {

  navMain: [
    {
      title: "Dashboard",
      url: "/student/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Student",
      url: "/student/manageProfile",
      icon: Bot,
      items: [
        {
          title: "Manage Profile",
          url: "/student/manageProfile",
        },
        {
          title: "Past Booking",
          url: "/student/pastBooking",
        },
        {
          title: "Check Out",
          url: "/student/payment",
        },
        {
          title: "Payment History",
          url: "/student/paymentHistory",
        },
        {
          title: "Review Tutor",
          url: "/student/reviewTutor",
        },
      ],
    },


  ],
  navTutor: [
    {
      title: "Dashboard",
      url: "/tutor/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Tutor",
      url: "/tutor/manageProfile",
      icon: Bot,
      items: [
        {
          title: "Manage Profile",
          url: "/tutor/manageProfile",
        },
        {
          title: " Booking Request",
          url: "/tutor/bookingRequest",
        },
        {
          title: "Earning",
          url: "/tutor/earning",
        },
        {
          title: "Subject Management",
          url: "/tuttor/subjectManagement",
        },
      ],
    },


  ],

}
// type UserRole = "student" | "tutor";
// interface User {
//   id: string;
//   name: string;
//   email: string;
//   role: UserRole; // Role must be "user" | "admin" | "tutor"
// }

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user }: any = useUser();
  // console.log(user)

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex items-center justify-center">
                  <Image
                    src={Logo}
                    alt="etutor"
                    width={110}
                    height={32}
                  />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">

                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {!user ? (
          <p>Loading...</p> // Show a spinner or skeleton here
        ) : user?.role === "tutor" ? (
          <NavMain items={data.navTutor} />
        ) : (
          <NavMain items={data.navMain} />
        )}

        {/* <NavMain items={item} /> */}

      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
