import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import HamburguerButton from "@/components/atoms/hamburguerButton";

const DRAWER_ID = "navbar-drawer";

describe("HamburguerButton", () => {
    it("renders the button", () => {
        render(<HamburguerButton drawerId={DRAWER_ID} />);
        const element = screen.getByRole("button");
        expect(element).toBeInTheDocument();
    })
});