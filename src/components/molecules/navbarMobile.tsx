import React from "react";
import { INavbarLink } from "@/global-config/constant/navbar";
import HamburguerButton from "../atoms/hamburguerButton";
import { Link } from "../atoms/link";

export interface NavbarMobileProps {
    links: INavbarLink[];
}

// TODO: Change this logic of drawer id whitout lose server side nature of this component.

const DRAWER_ID = "navbar-drawer";

const NavbarMobile = (
    {
        links,
    }: NavbarMobileProps
) => {

    return (
        <div className="flex md:hidden">
            <HamburguerButton drawerId={DRAWER_ID} />
            <nav  id={DRAWER_ID} className="flex w-full h-screen bg-slate-700 fixed top-0 left-0 transition-all ease-out duration-700">
                <ul className="flex flex-col items-center w-full h-full gap-4 pt-32">
                    {links.map((link, index) => (
                        <li key={index} >
                            <Link href={link.href} variant="default" className="mr-4 text-white">{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

        </div>
    )
}

NavbarMobile.displayName = 'NavbarMobile';

export default NavbarMobile;
