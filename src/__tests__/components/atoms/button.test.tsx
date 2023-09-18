import "@testing-library/jest-dom/extend-expect";
import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/atoms/button";

describe("Button", () => {
  it("renders with default bg-primary", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-primary");
  });

  it("renders with outline variant", () => {
    render(<Button variant="outline">Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("border");
    expect(button).toHaveClass("border-input");
  });

  it("renders with secondary variant bg", () => {
    render(<Button variant="secondary">Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-secondary");
  });

  it("renders with sm size", () => {
    render(<Button size="sm">Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("h-9");
    expect(button).toHaveClass("px-3");
  });

  it("renders with lg size", () => {
    render(<Button size="lg">Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("h-11");
    expect(button).toHaveClass("px-8");
  });

  it("renders with icon size", () => {
    render(<Button size="icon">👍</Button>);
    const button = screen.getByRole("button", { name: "👍" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("h-10");
    expect(button).toHaveClass("w-10");
  });

  it("calls onClick handler when clicked", async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup()
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole("button");
    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick handler when disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click me
      </Button>
    );
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders with additional className", () => {
    render(<Button className="test-class">Click me</Button>)
    const element = screen.getByRole("button")

    expect(element).toHaveClass("test-class")
  })

  it("renders with forwarded ref", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Click Me</Button>);
    const element = screen.getByRole("button");

    expect(element).toBe(ref.current)
  })
});
