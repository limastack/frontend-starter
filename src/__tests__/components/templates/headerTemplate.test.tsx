import "@testing-library/jest-dom/extend-expect";
import HeaderTemplate from "@/components/templates/headerTemplate";
import { render, screen } from "@testing-library/react";
import { NAVBAR_LINKS } from "@/global-config/constant/navbar";

describe("HeaderTemplate", () => {
  it("renders the brand link with the correct text", () => {
    render(<HeaderTemplate />);
    const linkElement = screen.getByRole("link", { name: /frontend starter/i });
    expect(linkElement).toBeInTheDocument();
  });

  it("renders the navbar with the correct number of links", () => {
    render(<HeaderTemplate />);
    const linkElements = screen.getAllByRole("link");
    expect(linkElements).toHaveLength(NAVBAR_LINKS.length + 1);
  });

  it("renders the navbar with the correct button", () => {
    render(<HeaderTemplate />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});