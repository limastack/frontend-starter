import "@testing-library/jest-dom/extend-expect";
import Navbar from "@/components/molecules/navbar";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@/components/atoms/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

describe("Navbar", () => {
  it("renders the correct number of links", () => {
    render(<Navbar links={links} />);
    const linkElements = screen.getAllByRole("link");
    expect(linkElements).toHaveLength(links.length);
  });

  it("renders the correct link text", () => {
    render(<Navbar links={links} />);
    const linkElements = screen.getAllByRole("link");
    linkElements.forEach((linkElement, index) => {
      expect(linkElement).toHaveTextContent(links[index].label);
    });
  });

  it("calls the onClick handler when the button is clicked", async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup()
    render(<Navbar links={links} button={<Button onClick={handleClick}>Click Me</Button>} />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    await user.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders the classname prop", () => {
    const className = "test-classname";
    render(<Navbar links={links} className={className} />);
    const navbarElement = screen.getByRole("navigation");
    expect(navbarElement).toHaveClass(className);
  });
});