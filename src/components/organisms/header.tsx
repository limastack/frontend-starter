import React from "react";
import { Link } from "../atoms/link";
import Navbar, { NavbarProps } from "../molecules/navbar";
import { cn } from "@/lib/utils";
import NavbarMobile from "../molecules/navbarMobile";

export interface HeaderProps {
    className?: string;
    brand?: {
        href: string;
        label: string;
    };
    navbar: NavbarProps
}

const Header = (
    {
        className,
        brand,
        navbar
    }: HeaderProps
) => {
    return <div className={cn("fixed w-full top-0 left-0 h-24 px-4 md:px-9 flex items-center justify-between select-none z-50", className)}>
        {brand && (
            <Link href={brand.href} className="font-bold text-white tracking-wider z-50">{brand.label}</Link>
        )}
        <Navbar links={navbar.links} button={navbar.button || undefined} />
        <NavbarMobile links={navbar.links} />        
    </div>;
}

Header.displayName = 'Header';

export default Header;
