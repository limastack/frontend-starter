import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Typography } from "@/components/atoms/typography";

describe("Typography", () => {
  it("renders the correct default variant", () => {
    render(<Typography data-testid="defaultVariant">Default</Typography>);
    const element = screen.getByTestId("defaultVariant");

    expect(element.tagName).toBe("P");
  });

  it("renders the correct tag by variant", () => {
    render(
      <Typography variant="h1" data-testid="h1Variant">
        H1
      </Typography>
    );
    render(
      <Typography variant="h2" data-testid="h2Variant">
        H2
      </Typography>
    );
    render(
      <Typography variant="h3" data-testid="h3Variant">
        H3
      </Typography>
    );
    render(
      <Typography variant="h4" data-testid="h4Variant">
        H4
      </Typography>
    );
    render(
      <Typography variant="h5" data-testid="h5Variant">
        H5
      </Typography>
    );
    render(
      <Typography variant="h6" data-testid="h6Variant">
        H6
      </Typography>
    );
    render(
      <Typography variant="body1" data-testid="body1Variant">
        Body1
      </Typography>
    );
    render(
      <Typography variant="body2" data-testid="body2Variant">
        Body2
      </Typography>
    );
    render(
      <Typography variant="caption" data-testid="captionVariant">
        Body2
      </Typography>
    );

    const h1 = screen.getByTestId("h1Variant");
    const h2 = screen.getByTestId("h2Variant");
    const h3 = screen.getByTestId("h3Variant");
    const h4 = screen.getByTestId("h4Variant");
    const h5 = screen.getByTestId("h5Variant");
    const h6 = screen.getByTestId("h6Variant");
    const body1 = screen.getByTestId("body1Variant");
    const body2 = screen.getByTestId("body2Variant");
    const caption = screen.getByTestId("captionVariant");

    expect(h1.tagName).toBe("H1");
    expect(h2.tagName).toBe("H2");
    expect(h3.tagName).toBe("H3");
    expect(h4.tagName).toBe("H4");
    expect(h5.tagName).toBe("H5");
    expect(h6.tagName).toBe("H6");
    expect(body1.tagName).toBe("P");
    expect(body2.tagName).toBe("SPAN");
    expect(caption.tagName).toBe("P");
  });

  it("renders as a child component", () => {
    render(
      <Typography asChild data-testid="asChild">
        <a>Hello World</a>
      </Typography>
    );
    const element = screen.getByTestId("asChild");

    expect(element.tagName).toBe("A");
  });

  it("renders with additional className", () => {
    render(
      <Typography className="test-class" data-testid="testClass">
        Hello World
      </Typography>
    );
    const element = screen.getByTestId("testClass");

    expect(element).toHaveClass("test-class");
  });

  it("renders with forwarded ref", () => {
    const ref = React.createRef<HTMLParagraphElement>();
    render(<Typography ref={ref} data-testid="ref" />);
    const element = screen.getByTestId("ref");

    expect(element).toBe(ref.current);
  })

  it("renders with children", () => {
    render(<Typography data-testid="children">Hello World</Typography>)
    const element = screen.getByTestId("children");

    expect(element).toHaveTextContent("Hello World");
  })

  
});
