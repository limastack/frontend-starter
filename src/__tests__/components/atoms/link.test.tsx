import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Link } from "@/components/atoms/link";

describe("Link", () => {
    it("renders the correct default variant", () => {
     render(<Link data-testid="link">Anchor</Link>)
     const element = screen.getByTestId("link")

     expect(element.tagName).toBe("A")
    })
})