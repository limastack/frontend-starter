import "@testing-library/jest-dom/extend-expect";
import Header, { HeaderProps } from "@/components/organisms/header";
import { render, screen } from "@testing-library/react";


const navbarProps: HeaderProps["navbar"] = {
  links: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  button: <button>Click Me</button>,
};

const brand = { href: "/", label: "My App" };

describe("Header", () => {
  it("renders the brand link when provided", () => {
    render(<Header brand={brand} navbar={navbarProps} />);
    const linkElement = screen.getByRole("link", { name: /my app/i });
    expect(linkElement).toBeInTheDocument();
  });

  it("does not render the brand link when not provided", () => {
    render(<Header navbar={navbarProps} />);
    const linkElement = screen.queryByRole("link", { name: /my app/i });
    expect(linkElement).not.toBeInTheDocument();
  });

  it("renders the navbar with the correct number of links", () => {
    render(<Header navbar={navbarProps} />);
    const linkElements = screen.getAllByRole("link");
    expect(linkElements).toHaveLength(navbarProps.links.length);
  });

  it("renders the navbar with the correct button", () => {
    render(<Header navbar={navbarProps} />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });
});