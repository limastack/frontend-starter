import { INavbarLink } from "@/global-config/constant/navbar";
import { Link } from "../atoms/link";
import { Button, ButtonProps } from "../atoms/button";
import { cn } from "@/lib/utils";

export interface NavbarProps {
    className?: string;
    links: INavbarLink[];
    button?: React.ReactElement<ButtonProps, typeof Button>;
}

const Navbar = (
    {
        className,
        links,
        button
    }: NavbarProps
) => {
    return (
        <nav className={cn("hidden relative md:flex items-center justify-between min-w-[calc(50%)] h-full leading-7 border-b", className)}>
            <ul className="flex items-center mr-20">
                {links.map((link, index) => (
                    <li key={index} >
                        <Link href={link.href} variant="default" className="mr-4 text-white">{link.label}</Link>
                    </li>
                ))}
            </ul>
            {button}
        </nav>
    )
}

Navbar.displayName = 'Navbar';

export default Navbar;
