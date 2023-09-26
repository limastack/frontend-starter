export interface INavbarLink {
  href: string;
  label: string;
}

export const NAVBAR_LINKS: INavbarLink[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/contact",
    label: "Contact",
  },
  {
    href: "/projects",
    label: "Projects",
  }
];
