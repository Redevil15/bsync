'use client'

import { cn } from "@/lib/utils";
import { CalendarCheck, HomeIcon, LucideProps, SettingsIcon, Users2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface iAppProps {
  id: number;
  name: string;
  href: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}

export const dashboardLinks: iAppProps[] = [
  {
    id: 0,
    name: "Event Types",
    href: "/dashboard",
    icon: HomeIcon
  },
  {
    id: 1,
    name: "Meetings",
    href: "/dashboard/meetings",
    icon: Users2
  },
  {
    id: 2,
    name: "Availability",
    href: "/dashboard/availability",
    icon: CalendarCheck
  },
  {
    id: 3,
    name: "Settings",
    href: "/dashboard/settings",
    icon: SettingsIcon 
  }
]

export function Dashboardlinks() {
  const pathname = usePathname();
  return (
    <>
      {dashboardLinks.map((link) => (
        <Link className={cn(
          pathname === link.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground", "flex items-center gap-3 px-3 py-2 rounded-lg transition-all hover:text-primary"
        )} key={link.id} href={link.href} passHref>
         
            <link.icon className="size-4" />
            {link.name}
        </Link>
      ))}
    </>
  )
}