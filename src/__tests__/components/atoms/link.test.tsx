import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Link } from "@/components/atoms/link";

describe("Link", () => {
    it("renders a link with the correct text", () => {
        render(<Link href="/">Home</Link>);
        const element = screen.getByRole("link", { name: /home/i });
        expect(element).toBeInTheDocument();
    });

    it("applies the correct variant class", () => {
        render(<Link href="/" variant="danger">Danger Link</Link>);
        const element = screen.getByRole("link", { name: /danger link/i });
        expect(element).toHaveClass("text-red-700 hover:text-red-500");
    });

    it("calls the onClick handler when clicked", async () => {
        const handleClick = jest.fn();
        const user = userEvent.setup()
        render(<Link href="/" onClick={handleClick}>Click Me</Link>);
        const element = screen.getByRole("link", { name: /click me/i });
        await user.click(element);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
})